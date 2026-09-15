import { d as db } from "../../../chunks/db.js";
async function load() {
  const events = (await db.execute("SELECT * FROM events")).rows.reverse();
  const event_count = events.length;
  return {
    events,
    event_count
  };
}
export {
  load
};
