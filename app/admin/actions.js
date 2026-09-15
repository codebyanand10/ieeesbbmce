"use server";

import supabase from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import sharp from "sharp";

export async function loginAdmin(formData) {
    const username = formData.get("username")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    const { data: admin } = await supabase
        .from("admin")
        .select("*")
        .eq("username", username)
        .eq("password", password);

    if (admin && admin.length > 0) {
        return { auth: true };
    }
    return { auth: false, error: "Invalid credentials" };
}

export async function addEvent(formData) {
    const name = formData.get("event-name")?.toString() || "";
    const description = formData.get("event-description")?.toString() || "";
    const date = formData.get("event-date")?.toString() || "";
    const venue = formData.get("event-venue")?.toString() || "";
    const reglink = formData.get("event-reglink")?.toString() || "";
    const status = Number(formData.get("event-status")) || 0;

    const eventData = { name, description, date, venue, reglink, status };

    const img = formData.get("event-img");
    if (img instanceof File && img.size > 0) {
        const imgbuff = Buffer.from(await img.arrayBuffer());
        const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
        eventData.image = imgout;
    }

    await supabase.from("events").insert(eventData);
    revalidatePath("/events");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateEvent(formData) {
    const id = Number(formData.get("id"));
    const name = formData.get("event-name")?.toString() || "";
    const description = formData.get("event-description")?.toString() || "";
    const date = formData.get("event-date")?.toString() || "";
    const venue = formData.get("event-venue")?.toString() || "";
    const reglink = formData.get("event-reglink")?.toString() || "";
    const status = Number(formData.get("event-status")) || 0;

    const eventData = { name, description, date, venue, reglink, status };

    const img = formData.get("event-img");
    if (img instanceof File && img.size > 0) {
        const imgbuff = Buffer.from(await img.arrayBuffer());
        const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
        eventData.image = imgout;
    }

    await supabase.from("events").update(eventData).eq("id", id);
    revalidatePath("/events");
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteEvent(id) {
    await supabase.from("events").delete().eq("id", Number(id));
    revalidatePath("/events");
    revalidatePath("/admin");
    return { success: true };
}

export async function addFacExecom(formData) {
    const name = formData.get("name")?.toString() || "";
    const role = formData.get("role")?.toString() || "";
    const facData = { name, role };

    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
        const imgbuff = Buffer.from(await img.arrayBuffer());
        const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
        facData.image = imgout;
    }

    await supabase.from("faculty_execom").insert(facData);
    revalidatePath("/execom");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateFacExecom(formData) {
    const id = Number(formData.get("id"));
    const name = formData.get("name")?.toString() || "";
    const role = formData.get("role")?.toString() || "";
    const facData = { name, role };

    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
        const imgbuff = Buffer.from(await img.arrayBuffer());
        const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
        facData.image = imgout;
    }

    await supabase.from("faculty_execom").update(facData).eq("id", id);
    revalidatePath("/execom");
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteFacExecom(id) {
    await supabase.from("faculty_execom").delete().eq("id", Number(id));
    revalidatePath("/execom");
    revalidatePath("/admin");
    return { success: true };
}

export async function addStdExecom(formData) {
    const name = formData.get("name")?.toString() || "";
    const role = formData.get("role")?.toString() || "";
    const instagram = formData.get("instagram")?.toString() || null;
    const github = formData.get("github")?.toString() || null;
    const linkedin = formData.get("linkedin")?.toString() || null;
    const email = formData.get("email")?.toString() || null;
    const phone = formData.get("phone")?.toString() || null;

    const studentData = { name, role, instagram, github, linkedin, email, phone };

    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
        const imgbuff = Buffer.from(await img.arrayBuffer());
        const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
        studentData.image = imgout;
    }

    await supabase.from("student_execom").insert(studentData);
    revalidatePath("/execom");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateStdExecom(formData) {
    const id = Number(formData.get("id"));
    const name = formData.get("name")?.toString() || "";
    const role = formData.get("role")?.toString() || "";
    const instagram = formData.get("instagram")?.toString() || null;
    const github = formData.get("github")?.toString() || null;
    const linkedin = formData.get("linkedin")?.toString() || null;
    const email = formData.get("email")?.toString() || null;
    const phone = formData.get("phone")?.toString() || null;

    const studentData = { name, role, instagram, github, linkedin, email, phone };

    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
        const imgbuff = Buffer.from(await img.arrayBuffer());
        const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
        studentData.image = imgout;
    }

    await supabase.from("student_execom").update(studentData).eq("id", id);
    revalidatePath("/execom");
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteStdExecom(id) {
    await supabase.from("student_execom").delete().eq("id", Number(id));
    revalidatePath("/execom");
    revalidatePath("/admin");
    return { success: true };
}
