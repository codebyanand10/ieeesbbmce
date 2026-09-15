import supabase from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const [facultyRes, studentRes] = await Promise.all([
            supabase.from("faculty_execom").select("*").order("id", { ascending: true }),
            supabase.from("student_execom").select("*").order("id", { ascending: true }),
        ]);

        return {
            faculty_execom: facultyRes.data || [],
            student_execom: studentRes.data || [],
        };
    } catch (err) {
        console.error("Error loading execom:", err);
        return {
            faculty_execom: [],
            student_execom: [],
        };
    }
}
