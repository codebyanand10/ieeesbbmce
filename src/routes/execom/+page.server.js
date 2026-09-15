import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const faculty_execom = (await db.execute("SELECT * from faculty_execom")).rows;
        const student_execom = (await db.execute("SELECT * from student_execom")).rows;
        
        return {
            faculty_execom,
            student_execom,
        };
    } catch (err) {
        console.error("Error loading execom:", err);
        return {
            faculty_execom: [],
            student_execom: [],
        };
    }
}
