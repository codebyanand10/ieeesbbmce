import supabase from "$lib/db";
import sharp from "sharp";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const [eventsRes, adminRes, facultyRes, studentRes] = await Promise.all([
        supabase.from("events").select("*").order("id", { ascending: false }),
        supabase.from("admin").select("*"),
        supabase.from("faculty_execom").select("*").order("id", { ascending: true }),
        supabase.from("student_execom").select("*").order("id", { ascending: true }),
    ]);

    return {
        events: eventsRes.data || [],
        admin: adminRes.data || [],
        faculty_execom: facultyRes.data || [],
        student_execom: studentRes.data || [],
    };
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
    login: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get("username")?.toString();
        const password = formData.get("password")?.toString();

        const { data: admin } = await supabase
            .from("admin")
            .select("*")
            .eq("username", username)
            .eq("password", password);

        if (admin && admin.length > 0) {
            return { auth: true };
        } else {
            return { auth: false };
        }
    },

    add_event: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("event-name")?.toString() || "";
        const description = formData.get("event-description")?.toString() || "";
        const date = formData.get("event-date")?.toString() || "";
        const venue = formData.get("event-venue")?.toString() || "";
        const reglink = formData.get("event-reglink")?.toString() || "";
        const status = Number(formData.get("event-status")) || 0;

        /** @type {{ name: string, description: string, date: string, venue: string, reglink: string, status: number, image?: string }} */
        const eventData = { name, description, date, venue, reglink, status };

        const img = formData.get("event-img");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            eventData.image = imgout;
        }

        await supabase.from("events").insert(eventData);
        return { auth: true };
    },

    update_event: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));
        const name = formData.get("event-name")?.toString() || "";
        const description = formData.get("event-description")?.toString() || "";
        const date = formData.get("event-date")?.toString() || "";
        const venue = formData.get("event-venue")?.toString() || "";
        const reglink = formData.get("event-reglink")?.toString() || "";
        const status = Number(formData.get("event-status")) || 0;

        /** @type {{ name: string, description: string, date: string, venue: string, reglink: string, status: number, image?: string }} */
        const eventData = { name, description, date, venue, reglink, status };

        const img = formData.get("event-img");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            eventData.image = imgout;
        }

        await supabase.from("events").update(eventData).eq("id", id);
        return { auth: true };
    },

    remove_event: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));

        await supabase.from("events").delete().eq("id", id);
        return { success: true, auth: true };
    },

    add_fac_execom: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("name")?.toString() || "";
        const role = formData.get("role")?.toString() || "";

        /** @type {{ name: string, role: string, image?: string }} */
        const facData = { name, role };

        const img = formData.get("image");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            facData.image = imgout;
        }

        await supabase.from("faculty_execom").insert(facData);
        return { auth: true };
    },

    update_fac_execom: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));
        const name = formData.get("name")?.toString() || "";
        const role = formData.get("role")?.toString() || "";

        /** @type {{ name: string, role: string, image?: string }} */
        const facData = { name, role };

        const img = formData.get("image");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            facData.image = imgout;
        }

        await supabase.from("faculty_execom").update(facData).eq("id", id);
        return { auth: true };
    },

    remove_fac_execom: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));

        await supabase.from("faculty_execom").delete().eq("id", id);
        return { success: true, auth: true };
    },

    add_std_execom: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("name")?.toString() || "";
        const role = formData.get("role")?.toString() || "";
        const instagram = formData.get("instagram")?.toString() || null;
        const github = formData.get("github")?.toString() || null;
        const linkedin = formData.get("linkedin")?.toString() || null;
        const email = formData.get("email")?.toString() || null;
        const phone = formData.get("phone")?.toString() || null;

        /** @type {{ name: string, role: string, instagram: string|null, github: string|null, linkedin: string|null, email: string|null, phone: string|null, image?: string }} */
        const studentData = { name, role, instagram, github, linkedin, email, phone };

        const img = formData.get("image");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            studentData.image = imgout;
        }

        await supabase.from("student_execom").insert(studentData);
        return { auth: true };
    },

    update_std_execom: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));
        const name = formData.get("name")?.toString() || "";
        const role = formData.get("role")?.toString() || "";
        const instagram = formData.get("instagram")?.toString() || null;
        const github = formData.get("github")?.toString() || null;
        const linkedin = formData.get("linkedin")?.toString() || null;
        const email = formData.get("email")?.toString() || null;
        const phone = formData.get("phone")?.toString() || null;

        /** @type {{ name: string, role: string, instagram: string|null, github: string|null, linkedin: string|null, email: string|null, phone: string|null, image?: string }} */
        const studentData = { name, role, instagram, github, linkedin, email, phone };

        const img = formData.get("image");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            studentData.image = imgout;
        }

        await supabase.from("student_execom").update(studentData).eq("id", id);
        return { auth: true };
    },

    remove_std_execom: async ({ request }) => {
        const formData = await request.formData();
        const id = Number(formData.get("id"));

        await supabase.from("student_execom").delete().eq("id", id);
        return { success: true, auth: true };
    },
};
