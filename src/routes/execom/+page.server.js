import db from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const faculty_execom = (await db.execute("SELECT * from faculty_execom")).rows;
    const student_execom = (await db.execute("SELECT * from student_execom")).rows;
    
    return {
        faculty_execom,
        student_execom,
    };
}
