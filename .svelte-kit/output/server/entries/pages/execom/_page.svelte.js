import { J as ensure_array_like, y as attr, K as stringify, N as attr_class } from "../../../chunks/index2.js";
import { a as avatar_placeholder } from "../../../chunks/avatar.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="main svelte-86vnv2"><h1 class="faculty-head svelte-86vnv2">Faculty Execom</h1> <div class="faculty-div svelte-86vnv2"><!--[-->`);
    const each_array = ensure_array_like(data.faculty_execom);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let faculty = each_array[$$index];
      $$renderer2.push(`<div class="faculty-grid svelte-86vnv2"><div class="faculty-img-label svelte-86vnv2">`);
      if (faculty.image) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img class="faculty-img svelte-86vnv2"${attr("src", `data:image/webp;base64,${stringify(faculty.image)}`)}${attr("alt", faculty.name)}/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<img class="faculty-img svelte-86vnv2"${attr("src", avatar_placeholder)}${attr("alt", faculty.name)}/>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="faculty-name svelte-86vnv2">${escape_html(faculty.name)}</div> <div class="faculty-role svelte-86vnv2">${escape_html(faculty.role)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <h1 class="faculty-head svelte-86vnv2">Student Execom</h1> <div class="faculty-div svelte-86vnv2"><!--[-->`);
    const each_array_1 = ensure_array_like(data.student_execom);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let student = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr_class(`faculty-grid student-grid-link ${stringify(student.name.toLowerCase().includes("renesh") ? "center-card" : "")}`, "svelte-86vnv2")}${attr("href", `/execom/${stringify(student.id)}`)}><div class="faculty-img-label svelte-86vnv2">`);
      if (student.image) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img class="faculty-img svelte-86vnv2"${attr("src", `data:image/webp;base64,${stringify(student.image)}`)}${attr("alt", student.name)}/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<img class="faculty-img svelte-86vnv2"${attr("src", avatar_placeholder)}${attr("alt", student.name)}/>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="faculty-name svelte-86vnv2">${escape_html(student.name)}</div> <div class="faculty-role svelte-86vnv2">${escape_html(student.role)}</div> <div class="view-profile-tag svelte-86vnv2"><span class="svelte-86vnv2">View Profile</span> <svg class="arrow-icon svelte-86vnv2" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" class="svelte-86vnv2"></line><polyline points="12 5 19 12 12 19" class="svelte-86vnv2"></polyline></svg></div></a>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
