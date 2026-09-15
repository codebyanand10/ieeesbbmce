import { G as attr_style, y as attr, J as ensure_array_like, K as stringify } from "../../../chunks/index2.js";
import { a as avatar_placeholder } from "../../../chunks/avatar.js";
import { e as escape_html } from "../../../chunks/context.js";
const event_poster_placeholder = "/_app/immutable/assets/placehold.5Asa3K3G.webp";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form, img_src, img_src2, tab_index } = $$props;
    tab_index = 0;
    if (!form?.auth) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="main-login svelte-1jef3w8"><form class="login-form svelte-1jef3w8" method="POST" action="?/login"><label class="login-form-label svelte-1jef3w8">Username <input class="login-form-textbox svelte-1jef3w8" name="username" type="text"/></label> <label class="login-form-label svelte-1jef3w8">Password <input class="login-form-textbox svelte-1jef3w8" name="password" type="password"/></label> <button class="login-form-button svelte-1jef3w8">Log in</button></form></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (form?.auth) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="main svelte-1jef3w8"><div class="tabbar svelte-1jef3w8"><button class="tabbar-button svelte-1jef3w8"${attr_style(`background-color: ${stringify(tab_index === 0 ? "#01267f99" : "transparent")};`)}>Events</button> <button class="tabbar-button svelte-1jef3w8"${attr_style(`background-color: ${stringify(tab_index === 1 ? "#01267f99" : "transparent")};`)}>Execom</button></div> `);
      if (tab_index === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h1 class="events-head svelte-1jef3w8">Events</h1> <form class="event-grid svelte-1jef3w8" method="POST" action="?/add_event" enctype="multipart/form-data"><input type="text" class="event-name-textbox svelte-1jef3w8" name="event-name" placeholder="Event Name"/> <textarea class="event-desc-textbox svelte-1jef3w8" name="event-description" placeholder="Event Description"></textarea> <input type="date" class="event-date-picker svelte-1jef3w8" name="event-date"/> <input type="text" class="event-venue-textbox svelte-1jef3w8" name="event-venue" placeholder="Event Venue"/> <input type="url" class="event-reglink-textbox svelte-1jef3w8" name="event-reglink" placeholder="Event Registration Link"/> <select class="event-status-select svelte-1jef3w8" name="event-status">`);
        $$renderer2.option(
          { value: "1", class: "" },
          ($$renderer3) => {
            $$renderer3.push(`Coming Soon`);
          },
          "svelte-1jef3w8"
        );
        $$renderer2.option(
          { value: "2", class: "" },
          ($$renderer3) => {
            $$renderer3.push(`Register Now`);
          },
          "svelte-1jef3w8"
        );
        $$renderer2.option(
          { value: "3", class: "" },
          ($$renderer3) => {
            $$renderer3.push(`Registration Closed`);
          },
          "svelte-1jef3w8"
        );
        $$renderer2.option(
          { value: "4", class: "" },
          ($$renderer3) => {
            $$renderer3.push(`Ongoing`);
          },
          "svelte-1jef3w8"
        );
        $$renderer2.option(
          { value: "5", class: "" },
          ($$renderer3) => {
            $$renderer3.push(`Event Completed`);
          },
          "svelte-1jef3w8"
        );
        $$renderer2.push(`</select> <label class="event-img-label svelte-1jef3w8" for="event-img-picker">`);
        if (img_src) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img class="event-img svelte-1jef3w8"${attr("src", img_src)} alt="BMCE"/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<img class="event-img svelte-1jef3w8"${attr("src", event_poster_placeholder)} alt="BMCE"/>`);
        }
        $$renderer2.push(`<!--]--></label> <input type="file" class="event-img-picker svelte-1jef3w8" id="event-img-picker" name="event-img" accept="image/*"/> <button class="event-add-button svelte-1jef3w8" type="submit">Add</button></form> <!--[-->`);
        const each_array = ensure_array_like(data.events);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let event = each_array[$$index];
          $$renderer2.push(`<form class="event-grid svelte-1jef3w8" method="POST" action="?/update_event" enctype="multipart/form-data"><input type="text" class="event-name-textbox svelte-1jef3w8" name="event-name"${attr("value", event.name)} placeholder="Event Name"/> <textarea class="event-desc-textbox svelte-1jef3w8" name="event-description" placeholder="Event Description">`);
          const $$body = escape_html(event.description);
          if ($$body) {
            $$renderer2.push(`${$$body}`);
          }
          $$renderer2.push(`</textarea> <input type="date" class="event-date-picker svelte-1jef3w8" name="event-date"${attr("value", event.date)}/> <input type="text" class="event-venue-textbox svelte-1jef3w8" name="event-venue" placeholder="Event Venue"${attr("value", event.venue)}/> <input type="url" class="event-reglink-textbox svelte-1jef3w8" name="event-reglink"${attr("value", event.reglink)} placeholder="Event Registration Link"/> <select class="event-status-select svelte-1jef3w8" name="event-status">`);
          $$renderer2.option(
            { value: "1", selected: event.status === 1, class: "" },
            ($$renderer3) => {
              $$renderer3.push(`Coming Soon`);
            },
            "svelte-1jef3w8"
          );
          $$renderer2.option(
            { value: "2", selected: event.status === 2, class: "" },
            ($$renderer3) => {
              $$renderer3.push(`Register Now`);
            },
            "svelte-1jef3w8"
          );
          $$renderer2.option(
            { value: "3", selected: event.status === 3, class: "" },
            ($$renderer3) => {
              $$renderer3.push(`Registration Closed`);
            },
            "svelte-1jef3w8"
          );
          $$renderer2.option(
            { value: "4", selected: event.status === 4, class: "" },
            ($$renderer3) => {
              $$renderer3.push(`Ongoing`);
            },
            "svelte-1jef3w8"
          );
          $$renderer2.option(
            { value: "5", selected: event.status === 5, class: "" },
            ($$renderer3) => {
              $$renderer3.push(`Event Completed`);
            },
            "svelte-1jef3w8"
          );
          $$renderer2.push(`</select> <label class="event-img-label svelte-1jef3w8"${attr("for", `event-img-picker-${stringify(event.id)}`)}><img class="event-img svelte-1jef3w8"${attr("src", `data:image/webp;base64,${stringify(event.image)}`)} alt="placehold.webp"/></label> <input type="file" class="event-img-picker svelte-1jef3w8"${attr("id", `event-img-picker-${stringify(event.id)}`)} name="event-img" accept="image/*"/> <input type="hidden" name="id"${attr("value", event.id)} class="svelte-1jef3w8"/> <button class="event-add-button svelte-1jef3w8" type="submit">Apply</button> <button class="event-delete-button svelte-1jef3w8" type="submit" formaction="?/remove_event">Remove</button></form>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (tab_index === 1) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h1 class="events-head svelte-1jef3w8">Faculty Execom</h1> <div class="faculty-div svelte-1jef3w8"><form class="faculty-grid svelte-1jef3w8" method="POST" action="?/add_fac_execom" enctype="multipart/form-data"><label class="faculty-img-label svelte-1jef3w8" for="faculty-img-picker">`);
        if (img_src) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", img_src)} alt="placehold.webp"/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", avatar_placeholder)} alt="placehold.webp"/>`);
        }
        $$renderer2.push(`<!--]--></label> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="name" placeholder="Faculty Name"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="role" placeholder="Faculty Role"/> <input type="file" class="faculty-img-picker svelte-1jef3w8" id="faculty-img-picker" name="image" accept="image/*"/> <button class="event-add-button svelte-1jef3w8" type="submit">Add</button></form> <!--[-->`);
        const each_array_1 = ensure_array_like(data.faculty_execom);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let faculty = each_array_1[$$index_1];
          $$renderer2.push(`<form class="faculty-grid svelte-1jef3w8" method="POST" action="?/update_fac_execom" enctype="multipart/form-data"><label class="faculty-img-label svelte-1jef3w8"${attr("for", `faculty-img-picker-${stringify(faculty.id)}`)}>`);
          if (faculty.image) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", `data:image/webp;base64,${stringify(faculty.image)}`)} alt="placehold.webp"/>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", avatar_placeholder)} alt="placehold.webp"/>`);
          }
          $$renderer2.push(`<!--]--></label> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="name"${attr("value", faculty.name)} placeholder="Faculty Name"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="role"${attr("value", faculty.role)} placeholder="Faculty Role"/> <input type="file" class="faculty-img-picker svelte-1jef3w8"${attr("id", `faculty-img-picker-${stringify(faculty.id)}`)} name="image" accept="image/*"/> <input type="hidden" name="id"${attr("value", faculty.id)} class="svelte-1jef3w8"/> <button class="event-add-button svelte-1jef3w8" type="submit">Apply</button> <button class="event-delete-button svelte-1jef3w8" type="submit" formaction="?/remove_fac_execom">Remove</button></form>`);
        }
        $$renderer2.push(`<!--]--></div> <h1 class="events-head svelte-1jef3w8">Student Execom</h1> <div class="faculty-div svelte-1jef3w8"><form class="faculty-grid svelte-1jef3w8" method="POST" action="?/add_std_execom" enctype="multipart/form-data"><label class="faculty-img-label svelte-1jef3w8" for="student-img-picker">`);
        if (img_src2) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", img_src2)} alt="placehold.webp"/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", avatar_placeholder)} alt="placehold.webp"/>`);
        }
        $$renderer2.push(`<!--]--></label> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="name" placeholder="Student Name" required/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="role" placeholder="Student Role" required/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="instagram" placeholder="Instagram Username (e.g. i.4_anand)"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="github" placeholder="GitHub Username (e.g. codebyanand10)"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="linkedin" placeholder="LinkedIn (e.g. anand)"/> <input type="email" class="faculty-name-textbox svelte-1jef3w8" name="email" placeholder="Email (e.g. anandanil107@gmail.com)"/> <input type="tel" class="faculty-name-textbox svelte-1jef3w8" name="phone" placeholder="Phone Number (e.g. 7994980107)"/> <input type="file" class="faculty-img-picker svelte-1jef3w8" id="student-img-picker" name="image" accept="image/*"/> <button class="event-add-button svelte-1jef3w8" type="submit">Add</button></form> <!--[-->`);
        const each_array_2 = ensure_array_like(data.student_execom);
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let student = each_array_2[$$index_2];
          $$renderer2.push(`<form class="faculty-grid svelte-1jef3w8" method="POST" action="?/update_std_execom" enctype="multipart/form-data"><label class="faculty-img-label svelte-1jef3w8"${attr("for", `student-edit-img-picker-${stringify(student.id)}`)}>`);
          if (student.image) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", `data:image/webp;base64,${stringify(student.image)}`)} alt="placehold.webp"/>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<img class="faculty-img svelte-1jef3w8"${attr("src", avatar_placeholder)} alt="placehold.webp"/>`);
          }
          $$renderer2.push(`<!--]--></label> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="name"${attr("value", student.name || "")} placeholder="Student Name"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="role"${attr("value", student.role || "")} placeholder="Student Role"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="instagram"${attr("value", student.instagram || "")} placeholder="Instagram Username"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="github"${attr("value", student.github || "")} placeholder="GitHub Username"/> <input type="text" class="faculty-name-textbox svelte-1jef3w8" name="linkedin"${attr("value", student.linkedin || "")} placeholder="LinkedIn Profile"/> <input type="email" class="faculty-name-textbox svelte-1jef3w8" name="email"${attr("value", student.email || "")} placeholder="Email Address"/> <input type="tel" class="faculty-name-textbox svelte-1jef3w8" name="phone"${attr("value", student.phone || "")} placeholder="Phone Number"/> <input type="file" class="faculty-img-picker svelte-1jef3w8"${attr("id", `student-edit-img-picker-${stringify(student.id)}`)} name="image" accept="image/*"/> <input type="hidden" name="id"${attr("value", student.id)} class="svelte-1jef3w8"/> <button class="event-add-button svelte-1jef3w8" type="submit">Apply</button> <button class="event-delete-button svelte-1jef3w8" type="submit" formaction="?/remove_std_execom">Remove</button></form>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
