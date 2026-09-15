import { J as ensure_array_like, y as attr, K as stringify } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let event_poster_dir = "src/lib/assets/event-posters/";
    let { data } = $$props;
    function getDateString(date) {
      return new Date(date).toDateString();
    }
    function get_event_status(value) {
      switch (value) {
        case 1:
          return "Coming Soon";
        case 2:
          return "Register Soon";
        case 3:
          return "Registration Closed";
        case 4:
          return "Ongoing";
        case 5:
          return "Event Completed";
      }
    }
    $$renderer2.push(`<div class="main svelte-13hsgdq"><h1 class="events-head svelte-13hsgdq">Events</h1> `);
    if (data.event_count === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3 class="events-nil-head svelte-13hsgdq">No Events Anounced Yet</h3>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <!--[-->`);
    const each_array = ensure_array_like(data.events);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let event = each_array[$$index];
      $$renderer2.push(`<div class="event-grid svelte-13hsgdq"><h1 class="svelte-13hsgdq">${escape_html(event.name)}</h1> <p class="svelte-13hsgdq">${escape_html(event.description)} <br class="svelte-13hsgdq"/> <b class="svelte-13hsgdq">📅Date:</b> ${escape_html(getDateString(event.date))}<br class="svelte-13hsgdq"/> <b class="svelte-13hsgdq">📍Venue:</b> ${escape_html(event.venue)}</p> <img class="event-img svelte-13hsgdq"${attr("src", `data:image/webp;base64,${stringify(event.image)}`)}${attr("alt", `${stringify(event_poster_dir)}/placehold.webp`)}/> `);
      if (event.reglink != "" && event.status == 2) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a class="event-reglink-button svelte-13hsgdq"${attr("href", event.reglink)} target="_blank">Register Now</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (event.reglink != "" && event.status == 4) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a class="event-reglink-button svelte-13hsgdq"${attr("href", event.reglink)} target="_blank">${escape_html(get_event_status(event.status))}</a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<a class="event-reglink-button-disabled svelte-13hsgdq" href="">${escape_html(get_event_status(event.status))}</a>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
