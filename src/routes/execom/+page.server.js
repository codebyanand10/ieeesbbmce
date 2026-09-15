import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const facultyRes = await db.execute("SELECT * from faculty_execom");
        const studentRes = await db.execute("SELECT * from student_execom");
        
        const faculty_execom = facultyRes.rows.map(r => ({ ...r }));
        const student_execom = studentRes.rows.map(r => ({ ...r }));

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
