import { execomMembers } from "$lib/execomData";
import supabase from "$lib/db";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const { data: faculty } = await supabase
            .from("faculty_execom")
            .select("*")
            .order("id", { ascending: true });

        return {
            faculty_execom: faculty || [],
            student_execom: execomMembers,
        };
    } catch (err) {
        console.error("Error loading execom:", err);
        return {
            faculty_execom: [],
            student_execom: execomMembers,
        };
    }
}
