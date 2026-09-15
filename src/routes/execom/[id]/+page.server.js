import { getExecomMemberById } from "$lib/execomData";
import supabase from "$lib/db";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { id } = params;

    // Check local execom data with src/ieee photos first
    const localMember = getExecomMemberById(id);
    if (localMember) {
        return {
            member: localMember,
            student: localMember,
        };
    }

    // Fallback: check Supabase student_execom
    let { data: member } = await supabase
        .from("student_execom")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    // Fallback: check Supabase faculty_execom
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
        student: member,
    };
}
