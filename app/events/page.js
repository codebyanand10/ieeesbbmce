import supabase from "@/src/lib/db";

export const metadata = {
    title: "Events | IEEE SB BMCE",
    description: "Explore the latest technical events, bootcamps, workshops, and competitions hosted by IEEE SB BMCE.",
};

export const revalidate = 0; // Fresh events on request

function getDateString(date) {
    if (!date) return "TBA";
    try {
        return new Date(date).toDateString();
    } catch {
        return date;
    }
}

function getEventStatus(value) {
    switch (value) {
        case 1:
            return "Coming Soon";
        case 2:
            return "Register Now";
        case 3:
            return "Registration Closed";
        case 4:
            return "Ongoing";
        case 5:
            return "Event Completed";
        default:
            return "Event Details";
    }
}

function getEventImageSrc(image) {
    if (!image) return "/assets/placehold.webp";
    if (typeof image === "string" && (image.startsWith("/") || image.startsWith("http://") || image.startsWith("https://") || image.startsWith("data:"))) {
        return image;
    }
    return `data:image/webp;base64,${image}`;
}

async function getEvents() {
    try {
        const { data, error } = await supabase
            .from("events")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error("Supabase events fetch error:", error);
            return [];
        }
        return data || [];
    } catch (err) {
        console.error("Error fetching events:", err);
        return [];
    }
}

export default async function EventsPage() {
    const events = await getEvents();

    return (
        <div className="main">
            <h1 className="events-head">Events</h1>

            {events.length === 0 ? (
                <h3 className="events-nil-head">No Events Announced Yet</h3>
            ) : (
                <div className="events-list">
                    {events.map((event) => {
                        const isRegisterOpen = event.reglink && event.status === 2;
                        const isOngoingWithLink = event.reglink && event.status === 4;

                        return (
                            <div key={event.id} className="event-grid">
                                <div className="event-content">
                                    <h1>{event.name}</h1>
                                    <p>
                                        {event.description}
                                        <br /><br />
                                        <b>📅 Date:</b> {getDateString(event.date)}
                                        <br />
                                        <b>📍 Venue:</b> {event.venue || "BMCE Campus"}
                                    </p>

                                    {isRegisterOpen ? (
                                        <a
                                            className="event-reglink-button"
                                            href={event.reglink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Register Now
                                        </a>
                                    ) : isOngoingWithLink ? (
                                        <a
                                            className="event-reglink-button"
                                            href={event.reglink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {getEventStatus(event.status)}
                                        </a>
                                    ) : (
                                        <span className="event-reglink-button-disabled">
                                            {getEventStatus(event.status)}
                                        </span>
                                    )}
                                </div>

                                <div className="event-img-wrap">
                                    <img
                                        className="event-img"
                                        src={getEventImageSrc(event.image)}
                                        alt={event.name || "Event Poster"}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
