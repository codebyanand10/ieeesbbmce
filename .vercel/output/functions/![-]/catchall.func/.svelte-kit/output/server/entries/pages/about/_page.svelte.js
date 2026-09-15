import { z as slot, F as bind_props, y as attr } from "../../../chunks/index2.js";
import { i as invalid_default_snippet } from "../../../chunks/context.js";
import { j as fallback } from "../../../chunks/utils2.js";
function MultipleIntersectionObserver($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let elements = fallback($$props["elements"], () => [], true);
    let once = fallback($$props["once"], false);
    let root = fallback($$props["root"], null);
    let rootMargin = fallback($$props["rootMargin"], "0px");
    let threshold = fallback($$props["threshold"], 0);
    let elementIntersections = fallback($$props["elementIntersections"], () => /* @__PURE__ */ new Map(), true);
    let elementEntries = fallback($$props["elementEntries"], () => /* @__PURE__ */ new Map(), true);
    let observer = fallback($$props["observer"], null);
    $$renderer2.push(`<!--[-->`);
    slot($$renderer2, $$props, "default", { observer, elementIntersections, elementEntries });
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      elements,
      once,
      root,
      rootMargin,
      threshold,
      elementIntersections,
      elementEntries,
      observer
    });
  });
}
const bmce_building = "/_app/immutable/assets/bmce-building.BvisuNiL.webp";
function _page($$renderer) {
  let elements;
  let grid1;
  let grid2;
  let grid3;
  elements = [grid1, grid2, grid3];
  $$renderer.push(`<div class="main svelte-cwls5q"><h1 class="about-head svelte-cwls5q">About Us</h1> `);
  MultipleIntersectionObserver($$renderer, {
    elements,
    once: true,
    children: invalid_default_snippet,
    $$slots: {
      default: ($$renderer2, { elementIntersections }) => {
        $$renderer2.push(`<div class="bmce-grid svelte-cwls5q">`);
        if (elementIntersections.get(grid1)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img class="bmce-img svelte-cwls5q"${attr("src", bmce_building)} alt="BMCE"/> <h2 class="svelte-cwls5q">Baselios Mathews II College of Engineering (BMCE)</h2> <p class="svelte-cwls5q">The noble commitment to serve humanity through the elixir of technical education has led us to establish this institute par excellence we believe we can impregnate students the zeal and vigor that we ourselves are endowed with. We strive to meet the standards of technical excellence and creativity and to provide the opportunities in this global village. <br class="svelte-cwls5q"/> Baselios Mathews II College of Engineering (BMCE) is named after its founder, the late H H Moran Mar Baselios Marthoma Mathews II, the sixth Catholicons of the East and the Malankara Metropolitan of Malankara Orthodox Church. He was also the first Chairman of the institution. This renowned college is managed by Dr. C T Eapen Trust under Malankara Orthodox Syrian Church. The institution started functioning in 2002 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering and Technology. Located in the picturesquely beautiful Muthupilakadu in Sasthamcotta in the Kollam district of Kerala, the college stands out for its magnificent buildings and ultra-modern Infrastructure; a fascinating blend of architectural excellence and functional values. Affiliated to the University of Kerala and later to APJ Abdul Kalam Technological University, this self-financed institute currently provides 6 AICTE-approved UG courses.</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="sbbmce-grid svelte-cwls5q">`);
        if (elementIntersections.get(grid2)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h2 class="svelte-cwls5q">IEEE SB BMCE</h2> <p class="svelte-cwls5q">About IEEE SB BMCE
                    The IEEE Student Branch at Baselios Mathews II College of Engineering (BMCE) was officially formed in 2022 and became fully active in 2023. Under the dedicated guidance of our faculty advisor and the hard work of our founding members, the branch quickly established itself as a vibrant community.<br class="svelte-cwls5q"/> Our first-ever Executive Committee (Ex-Com) for the 2023-2025 term laid the foundation for all our future activities and initiatives. While we are a relatively new branch, our members are already actively engaged in various IEEE events and workshops, showcasing their talent and dedication.<br class="svelte-cwls5q"/> Currently, the branch is primarily focused on the Computer Society, providing a platform for students to delve deeper into the world of computing, software, and technology. We are committed to fostering technical knowledge, professional growth, and a strong sense of community among our members.</p> <img class="sbbmce-img svelte-cwls5q"${attr("src", bmce_building)} alt="BMCE"/>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> `);
        if (elementIntersections.get(grid3)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h1 class="vis-mis-head svelte-cwls5q">Our Vision &amp; Mission</h1>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="vis-mis-grid svelte-cwls5q">`);
        if (elementIntersections.get(grid3)) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="vis-mis-item svelte-cwls5q"><h1 class="svelte-cwls5q">Vision</h1> <p class="svelte-cwls5q">To be a hub of innovation and technical excellence at BMCE, fostering a community of skilled and empowered student engineers ready to tackle global challenges.</p></div> <div class="vis-mis-item svelte-cwls5q"><h1 class="svelte-cwls5q">Mission</h1> <p class="svelte-cwls5q">Our mission is to create a vibrant learning environment that:<br class="svelte-cwls5q"/> ● Connects students with cutting-edge technology and industry trends.<br class="svelte-cwls5q"/> ● Provides opportunities for hands-on projects, skill development, and professional networking.<br class="svelte-cwls5q"/> ● Prepares students for success in a competitive world through mentorship and peer-to-peer learning.</p></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
    }
  });
  $$renderer.push(`<!----></div>`);
}
export {
  _page as default
};
