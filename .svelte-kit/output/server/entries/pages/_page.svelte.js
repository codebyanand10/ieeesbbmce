import "clsx";
import { i as invalid_default_snippet } from "../../chunks/context.js";
import { z as slot, F as bind_props } from "../../chunks/index2.js";
import { j as fallback } from "../../chunks/utils2.js";
function IntersectionObserver_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let element = fallback($$props["element"], null);
    let once = fallback($$props["once"], false);
    let intersecting = fallback($$props["intersecting"], false);
    let root = fallback($$props["root"], null);
    let rootMargin = fallback($$props["rootMargin"], "0px");
    let threshold = fallback($$props["threshold"], 0);
    let entry = fallback($$props["entry"], null);
    let observer = fallback($$props["observer"], null);
    $$renderer2.push(`<!--[-->`);
    slot($$renderer2, $$props, "default", { intersecting, entry, observer });
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      element,
      once,
      intersecting,
      root,
      rootMargin,
      threshold,
      entry,
      observer
    });
  });
}
function _page($$renderer) {
  let aboutsection = void 0;
  $$renderer.push(`<div class="main svelte-1uha8ag"><div class="big-title-div svelte-1uha8ag"><h1 class="big-title svelte-1uha8ag">IEEE STUDENT BRANCH</h1> <h2 class="small-title svelte-1uha8ag">Baselios Mathews II College of Engineering</h2></div> `);
  IntersectionObserver_1($$renderer, {
    element: aboutsection,
    once: true,
    children: invalid_default_snippet,
    $$slots: {
      default: ($$renderer2, { intersecting }) => {
        $$renderer2.push(`<div class="about-div svelte-1uha8ag">`);
        if (intersecting) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h1 class="about-title svelte-1uha8ag">About IEEE</h1> <div class="about-grid svelte-1uha8ag"><div class="about-what svelte-1uha8ag" width="50px"><h1 class="svelte-1uha8ag">What is IEEE?</h1> <p class="svelte-1uha8ag">IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mission</h1> <p class="svelte-1uha8ag">IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Vision</h1> <p class="svelte-1uha8ag">IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.</p></div></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<h1 class="about-title svelte-1uha8ag">About IEEE</h1> <div class="about-grid svelte-1uha8ag"><div class="about-what svelte-1uha8ag" width="50px"><h1 class="svelte-1uha8ag">What is IEEE?</h1> <p class="svelte-1uha8ag">IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mission</h1> <p class="svelte-1uha8ag">IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Vision</h1> <p class="svelte-1uha8ag">IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.</p></div></div>`);
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
