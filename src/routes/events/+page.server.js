import supabase from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const { data: events, error } = await supabase
            .from("events")
            .select("*")
            .order("id", { ascending: false });

        if (error) {
            console.error("Supabase events error:", error);
            return {
                events: [],
                event_count: 0,
            };
        }

        return {
            events: events || [],
            event_count: (events || []).length,
        };
    } catch (err) {
        console.error("Error loading events:", err);
        return {
            events: [],
            event_count: 0,
        };
    }
}
