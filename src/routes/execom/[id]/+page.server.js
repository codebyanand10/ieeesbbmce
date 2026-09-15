import supabase from "$lib/db";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { id } = params;

    const { data: student, error: fetchErr } = await supabase
        .from("student_execom")
        .select("*")
        .eq("id", id)
        .single();

    if (fetchErr || !student) {
        throw error(404, "Student Execom member not found");
    }

    return {
        student,
    };
}
