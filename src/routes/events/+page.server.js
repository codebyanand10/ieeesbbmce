import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const events = ((await db.execute("SELECT * FROM events")).rows).reverse();
    const event_count = events.length;
    
    return {
        events,
        event_count
    };
}
