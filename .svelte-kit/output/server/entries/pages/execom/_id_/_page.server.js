import { d as db } from "../../../../chunks/db.js";
import { error } from "@sveltejs/kit";
async function load({ params }) {
  const { id } = params;
  const studentRes = await db.execute({
    sql: "SELECT * FROM student_execom WHERE id = ?",
    args: [id]
  });
  if (studentRes.rows.length === 0) {
    throw error(404, "Student Execom member not found");
  }
  const student = studentRes.rows[0];
  return {
    student
  };
}
export {
  load
};
