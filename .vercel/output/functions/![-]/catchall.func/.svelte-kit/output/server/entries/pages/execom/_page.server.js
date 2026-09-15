import { d as db } from "../../../chunks/db.js";
async function load() {
  const faculty_execom = (await db.execute("SELECT * from faculty_execom")).rows;
  const student_execom = (await db.execute("SELECT * from student_execom")).rows;
  return {
    faculty_execom,
    student_execom
  };
}
export {
  load
};
