import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const result = await db.execute("SELECT * FROM events");
        const events = result.rows.map(r => ({ ...r })).reverse();
        return {
            events,
            event_count: events.length
        };
    } catch (err) {
        console.error("Error loading events:", err);
        return {
            events: [],
            event_count: 0
        };
    }
}
