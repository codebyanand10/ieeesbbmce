"use server";

import supabase from "@/src/lib/db";
import { revalidatePath } from "next/cache";
import sharp from "sharp";

export async function loginAdmin(formData) {
    try {
        const username = formData.get("username")?.toString() || "";
        const password = formData.get("password")?.toString() || "";

        const { data: admin, error } = await supabase
            .from("admin")
            .select("*")
            .eq("username", username)
            .eq("password", password);

        if (error) {
            console.error("Login query error:", error);
            return { auth: false, error: "Authentication service error" };
        }

        if (admin && admin.length > 0) {
            return { auth: true };
        }
        return { auth: false, error: "Invalid credentials" };
    } catch (err) {
        console.error("Login error:", err);
        return { auth: false, error: "Authentication failed" };
    }
}

export async function addEvent(formData) {
    try {
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

        const { data, error } = await supabase.from("events").insert(eventData).select();
        if (error) {
            console.error("Supabase add event error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/events");
        revalidatePath("/admin");
        return { success: true, data: data?.[0] };
    } catch (err) {
        console.error("Error adding event:", err);
        return { success: false, error: err.message || "Failed to add event" };
    }
}

export async function updateEvent(formData) {
    try {
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

        const { data, error } = await supabase.from("events").update(eventData).eq("id", id).select();
        if (error) {
            console.error("Supabase update event error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/events");
        revalidatePath("/admin");
        return { success: true, data: data?.[0] };
    } catch (err) {
        console.error("Error updating event:", err);
        return { success: false, error: err.message || "Failed to update event" };
    }
}

export async function deleteEvent(id) {
    try {
        const { error } = await supabase.from("events").delete().eq("id", Number(id));
        if (error) {
            console.error("Supabase delete event error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/events");
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.error("Error deleting event:", err);
        return { success: false, error: err.message || "Failed to delete event" };
    }
}

export async function addFacExecom(formData) {
    try {
        const name = formData.get("name")?.toString() || "";
        const role = formData.get("role")?.toString() || "";
        const facData = { name, role };

        const img = formData.get("image");
        if (img instanceof File && img.size > 0) {
            const imgbuff = Buffer.from(await img.arrayBuffer());
            const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
            facData.image = imgout;
        }

        const { data, error } = await supabase.from("faculty_execom").insert(facData).select();
        if (error) {
            console.error("Supabase add faculty error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/execom");
        revalidatePath("/admin");
        return { success: true, data: data?.[0] };
    } catch (err) {
        console.error("Error adding faculty:", err);
        return { success: false, error: err.message || "Failed to add faculty member" };
    }
}

export async function updateFacExecom(formData) {
    try {
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

        const { data, error } = await supabase.from("faculty_execom").update(facData).eq("id", id).select();
        if (error) {
            console.error("Supabase update faculty error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/execom");
        revalidatePath("/admin");
        return { success: true, data: data?.[0] };
    } catch (err) {
        console.error("Error updating faculty:", err);
        return { success: false, error: err.message || "Failed to update faculty member" };
    }
}

export async function deleteFacExecom(id) {
    try {
        const { error } = await supabase.from("faculty_execom").delete().eq("id", Number(id));
        if (error) {
            console.error("Supabase delete faculty error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/execom");
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.error("Error deleting faculty:", err);
        return { success: false, error: err.message || "Failed to delete faculty member" };
    }
}

export async function addStdExecom(formData) {
    try {
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

        const { data, error } = await supabase.from("student_execom").insert(studentData).select();
        if (error) {
            console.error("Supabase add student error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/execom");
        revalidatePath("/admin");
        return { success: true, data: data?.[0] };
    } catch (err) {
        console.error("Error adding student:", err);
        return { success: false, error: err.message || "Failed to add student member" };
    }
}

export async function updateStdExecom(formData) {
    try {
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

        const { data, error } = await supabase.from("student_execom").update(studentData).eq("id", id).select();
        if (error) {
            console.error("Supabase update student error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/execom");
        revalidatePath("/admin");
        return { success: true, data: data?.[0] };
    } catch (err) {
        console.error("Error updating student:", err);
        return { success: false, error: err.message || "Failed to update student member" };
    }
}

export async function deleteStdExecom(id) {
    try {
        const { error } = await supabase.from("student_execom").delete().eq("id", Number(id));
        if (error) {
            console.error("Supabase delete student error:", error);
            return { success: false, error: error.message };
        }
        revalidatePath("/execom");
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.error("Error deleting student:", err);
        return { success: false, error: err.message || "Failed to delete student member" };
    }
}
