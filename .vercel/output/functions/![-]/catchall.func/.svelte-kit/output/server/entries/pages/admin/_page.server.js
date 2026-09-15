import { d as db } from "../../../chunks/db.js";
import sharp from "sharp";
async function load() {
  const events = (await db.execute("SELECT * from events")).rows.reverse();
  const admin = (await db.execute("SELECT * from admin")).rows;
  const faculty_execom = (await db.execute("SELECT * from faculty_execom")).rows;
  const student_execom = (await db.execute("SELECT * from student_execom")).rows;
  return {
    events,
    admin,
    faculty_execom,
    student_execom
  };
}
const actions = {
  login: async ({ request }) => {
    const formData = await request.formData();
    const username = formData.get("username")?.toString();
    const password = formData.get("password")?.toString();
    const admin = (await db.execute("SELECT * from admin")).rows;
    if (admin.length > 0 && admin[0].username === username && admin[0].password === password) {
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
    const img = formData.get("event-img");
    if (img instanceof File && img.size > 0) {
      const imgbuff = Buffer.from(await img.arrayBuffer());
      const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
      await db.execute({
        sql: "INSERT INTO events(name, description, date, venue, reglink, status, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: [name, description, date, venue, reglink, status, imgout]
      });
    } else {
      await db.execute({
        sql: "INSERT INTO events(name, description, date, venue, reglink, status) VALUES (?, ?, ?, ?, ?, ?)",
        args: [name, description, date, venue, reglink, status]
      });
    }
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
    const img = formData.get("event-img");
    if (img instanceof File && img.size > 0) {
      const imgbuff = Buffer.from(await img.arrayBuffer());
      const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
      await db.execute({
        sql: "UPDATE events SET name=?, description=?, date=?, venue=?, reglink=?, status=?, image=? WHERE id=?",
        args: [name, description, date, venue, reglink, status, imgout, id]
      });
    } else {
      await db.execute({
        sql: "UPDATE events SET name=?, description=?, date=?, venue=?, reglink=?, status=? WHERE id=?",
        args: [name, description, date, venue, reglink, status, id]
      });
    }
    return { auth: true };
  },
  remove_event: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get("id"));
    await db.execute({
      sql: "DELETE FROM events WHERE id = ?",
      args: [id]
    });
    return { success: true, auth: true };
  },
  add_fac_execom: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const role = formData.get("role")?.toString() || "";
    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
      const imgbuff = Buffer.from(await img.arrayBuffer());
      const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
      await db.execute({
        sql: "INSERT INTO faculty_execom(name, role, image) VALUES (?, ?, ?)",
        args: [name, role, imgout]
      });
    } else {
      await db.execute({
        sql: "INSERT INTO faculty_execom(name, role) VALUES (?, ?)",
        args: [name, role]
      });
    }
    return { auth: true };
  },
  update_fac_execom: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get("id"));
    const name = formData.get("name")?.toString() || "";
    const role = formData.get("role")?.toString() || "";
    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
      const imgbuff = Buffer.from(await img.arrayBuffer());
      const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
      await db.execute({
        sql: "UPDATE faculty_execom SET name=?, role=?, image=? WHERE id=?",
        args: [name, role, imgout, id]
      });
    } else {
      await db.execute({
        sql: "UPDATE faculty_execom SET name=?, role=? WHERE id=?",
        args: [name, role, id]
      });
    }
    return { auth: true };
  },
  remove_fac_execom: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get("id"));
    await db.execute({
      sql: "DELETE FROM faculty_execom WHERE id = ?",
      args: [id]
    });
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
    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
      const imgbuff = Buffer.from(await img.arrayBuffer());
      const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
      await db.execute({
        sql: "INSERT INTO student_execom(name, role, instagram, github, linkedin, email, phone, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        args: [name, role, instagram, github, linkedin, email, phone, imgout]
      });
    } else {
      await db.execute({
        sql: "INSERT INTO student_execom(name, role, instagram, github, linkedin, email, phone) VALUES (?, ?, ?, ?, ?, ?, ?)",
        args: [name, role, instagram, github, linkedin, email, phone]
      });
    }
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
    const img = formData.get("image");
    if (img instanceof File && img.size > 0) {
      const imgbuff = Buffer.from(await img.arrayBuffer());
      const imgout = (await sharp(imgbuff).webp().toBuffer()).toString("base64");
      await db.execute({
        sql: "UPDATE student_execom SET name=?, role=?, instagram=?, github=?, linkedin=?, email=?, phone=?, image=? WHERE id=?",
        args: [name, role, instagram, github, linkedin, email, phone, imgout, id]
      });
    } else {
      await db.execute({
        sql: "UPDATE student_execom SET name=?, role=?, instagram=?, github=?, linkedin=?, email=?, phone=? WHERE id=?",
        args: [name, role, instagram, github, linkedin, email, phone, id]
      });
    }
    return { auth: true };
  },
  remove_std_execom: async ({ request }) => {
    const formData = await request.formData();
    const id = Number(formData.get("id"));
    await db.execute({
      sql: "DELETE FROM student_execom WHERE id = ?",
      args: [id]
    });
    return { success: true, auth: true };
  }
};
export {
  actions,
  load
};
