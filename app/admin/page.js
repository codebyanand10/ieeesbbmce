import supabase from "@/src/lib/db";
import AdminClient from "./AdminClient";

export const metadata = {
    title: "Admin Dashboard | IEEE SB BMCE",
    description: "Manage events and executive committee members.",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function AdminPage() {
    let events = [];
    let faculty = [];
    let students = [];

    try {
        const [eventsRes, facultyRes, studentRes] = await Promise.all([
            supabase.from("events").select("*").order("id", { ascending: false }),
            supabase.from("faculty_execom").select("*").order("id", { ascending: true }),
            supabase.from("student_execom").select("*").order("id", { ascending: true }),
        ]);

        events = eventsRes.data || [];
        faculty = facultyRes.data || [];
        students = studentRes.data || [];
    } catch (err) {
        console.error("Error loading admin data:", err);
    }

    return (
        <AdminClient
            initialEvents={events}
            initialFaculty={faculty}
            initialStudents={students}
        />
    );
}
