import { x as head, y as attr, K as stringify } from "../../../../chunks/index2.js";
import { a as avatar_placeholder } from "../../../../chunks/avatar.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let student = data.student;
    function getInstagramUrl(handle) {
      if (!handle) return "#";
      if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
      const cleanHandle = handle.replace(/^@/, "").trim();
      return `https://www.instagram.com/${cleanHandle}`;
    }
    function getInstagramDisplay(handle) {
      if (!handle) return "";
      try {
        if (handle.includes("instagram.com/")) {
          const path = handle.split("instagram.com/")[1]?.split("?")[0]?.replace(/\/$/, "");
          if (path) return path;
        }
      } catch (e) {
      }
      return handle.replace(/^@/, "").trim();
    }
    function getGithubUrl(handle) {
      if (!handle) return "#";
      if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
      const cleanHandle = handle.replace(/^@/, "").trim();
      return `https://github.com/${cleanHandle}`;
    }
    function getGithubDisplay(handle) {
      if (!handle) return "";
      try {
        if (handle.includes("github.com/")) {
          const path = handle.split("github.com/")[1]?.split("?")[0]?.replace(/\/$/, "");
          if (path) return path;
        }
      } catch (e) {
      }
      return handle.replace(/^@/, "").trim();
    }
    function getLinkedinUrl(handle) {
      if (!handle) return "#";
      if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
      const cleanHandle = handle.replace(/^@/, "").trim();
      return `https://www.linkedin.com/in/${cleanHandle}`;
    }
    function getLinkedinDisplay(handle) {
      if (!handle) return "";
      try {
        if (handle.includes("linkedin.com/in/")) {
          let path = handle.split("linkedin.com/in/")[1]?.split("?")[0]?.replace(/\/$/, "");
          if (path) {
            return path;
          }
        }
      } catch (e) {
      }
      return handle.trim();
    }
    function getEmailUrl(email) {
      if (!email) return "#";
      return `mailto:${email.trim()}`;
    }
    function getPhoneUrl(phone) {
      if (!phone) return "#";
      const cleanPhone = phone.replace(/[^0-9+]/g, "");
      return `tel:${cleanPhone}`;
    }
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(student.name)} | IEEE SB BMCE</title>`);
      });
    });
    $$renderer2.push(`<div class="page-container svelte-vdz9me" role="button" tabindex="-1" aria-label="Back to Execom" style="cursor: pointer;"><div class="top-bar svelte-vdz9me" role="presentation"><button class="back-btn svelte-vdz9me"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-vdz9me"><line x1="19" y1="12" x2="5" y2="12" class="svelte-vdz9me"></line><polyline points="12 19 5 12 12 5" class="svelte-vdz9me"></polyline></svg> Back</button></div> <main class="profile-card svelte-vdz9me" role="presentation"><div class="profile-left svelte-vdz9me"><div class="avatar-wrapper svelte-vdz9me">`);
    if (student.image) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img class="profile-avatar svelte-vdz9me"${attr("src", `data:image/webp;base64,${stringify(student.image)}`)}${attr("alt", student.name)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<img class="profile-avatar svelte-vdz9me"${attr("src", avatar_placeholder)}${attr("alt", student.name)}/>`);
    }
    $$renderer2.push(`<!--]--></div> <h1 class="student-name svelte-vdz9me">${escape_html(student.name)}</h1> <p class="student-role svelte-vdz9me">${escape_html(student.role)}</p> <div class="accent-bar svelte-vdz9me"></div></div> <div class="card-divider svelte-vdz9me" aria-hidden="true"></div> <div class="profile-right svelte-vdz9me"><div class="connect-header svelte-vdz9me"><h2 class="connect-title svelte-vdz9me">Connect</h2> <div class="connect-accent-bar svelte-vdz9me"></div></div> <div class="connect-list svelte-vdz9me">`);
    if (student.instagram) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", getInstagramUrl(student.instagram))} target="_blank" rel="noopener noreferrer" class="connect-card instagram-tile svelte-vdz9me"><div class="icon-box instagram-box svelte-vdz9me"><svg class="social-icon svelte-vdz9me" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" class="svelte-vdz9me"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" class="svelte-vdz9me"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" class="svelte-vdz9me"></line></svg></div> <div class="card-text svelte-vdz9me"><span class="card-label svelte-vdz9me">Instagram</span> <span class="card-value svelte-vdz9me">${escape_html(getInstagramDisplay(student.instagram))}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (student.github) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", getGithubUrl(student.github))} target="_blank" rel="noopener noreferrer" class="connect-card github-tile svelte-vdz9me"><div class="icon-box github-box svelte-vdz9me"><svg class="social-icon svelte-vdz9me" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" class="svelte-vdz9me"></path></svg></div> <div class="card-text svelte-vdz9me"><span class="card-label svelte-vdz9me">GitHub</span> <span class="card-value svelte-vdz9me">${escape_html(getGithubDisplay(student.github))}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (student.linkedin) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", getLinkedinUrl(student.linkedin))} target="_blank" rel="noopener noreferrer" class="connect-card linkedin-tile svelte-vdz9me"><div class="icon-box linkedin-box svelte-vdz9me"><svg class="social-icon svelte-vdz9me" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72z" class="svelte-vdz9me"></path></svg></div> <div class="card-text svelte-vdz9me"><span class="card-label svelte-vdz9me">LinkedIn</span> <span class="card-value svelte-vdz9me">${escape_html(getLinkedinDisplay(student.linkedin))}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (student.email) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", getEmailUrl(student.email))} class="connect-card email-tile svelte-vdz9me"><div class="icon-box email-box svelte-vdz9me"><svg class="social-icon svelte-vdz9me" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" class="svelte-vdz9me"></path><polyline points="22,6 12,13 2,6" class="svelte-vdz9me"></polyline></svg></div> <div class="card-text svelte-vdz9me"><span class="card-label svelte-vdz9me">Email</span> <span class="card-value svelte-vdz9me">${escape_html(student.email)}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (student.phone) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", getPhoneUrl(student.phone))} class="connect-card phone-tile svelte-vdz9me"><div class="icon-box phone-box svelte-vdz9me"><svg class="social-icon svelte-vdz9me" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" class="svelte-vdz9me"></path></svg></div> <div class="card-text svelte-vdz9me"><span class="card-label svelte-vdz9me">Phone</span> <span class="card-value svelte-vdz9me">${escape_html(student.phone)}</span></div></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (!student.instagram && !student.github && !student.linkedin && !student.email && !student.phone) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="empty-notice svelte-vdz9me"><p class="svelte-vdz9me">No contact details added yet.</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></main></div>`);
  });
}
export {
  _page as default
};
