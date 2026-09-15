import supabase from "$lib/db";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { id } = params;

    // Try student_execom first
    let { data: member } = await supabase
        .from("student_execom")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    // Fallback to faculty_execom
    if (!member) {
        const { data: faculty } = await supabase
            .from("faculty_execom")
            .select("*")
            .eq("id", id)
            .maybeSingle();
        member = faculty;
    }

    if (!member) {
        throw error(404, "Execom member not found");
    }

    return {
        member,
        student: member, // for backwards compatibility
    };
}
