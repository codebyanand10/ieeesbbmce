<script>
    import avatar_placeholder from "$lib/assets/avatar.webp";

    let { data } = $props();

    /** @type {any} */
    let selectedMember = $state(null);

    function openMember(member) {
        selectedMember = member;
    }

    function closeMember() {
        selectedMember = null;
    }

    function handleKeydown(event) {
        if (event.key === "Escape" && selectedMember) {
            closeMember();
        }
    }

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
                if (path) return `@${path}`;
            }
        } catch (e) {}
        const clean = handle.replace(/^@/, "").trim();
        return clean.startsWith("@") ? clean : `@${clean}`;
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
        } catch (e) {}
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
                const path = handle.split("linkedin.com/in/")[1]?.split("?")[0]?.replace(/\/$/, "");
                if (path) return path;
            }
        } catch (e) {}
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
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="main">
    <!-- Faculty Section -->
    {#if data.faculty_execom && data.faculty_execom.length > 0}
        <h1 class="faculty-head">Faculty Execom</h1>
        <div class="faculty-div">
            {#each data.faculty_execom as faculty}
                <div
                    class="faculty-grid clickable-card"
                    onclick={() => openMember(faculty)}
                    role="button"
                    tabindex="0"
                    onkeydown={(e) => (e.key === "Enter" || e.key === " ") && openMember(faculty)}
                >
                    <div class="faculty-img-label">
                        {#if faculty.image}
                            <img class="faculty-img" src="data:image/webp;base64,{faculty.image}" alt="{faculty.name}">
                        {:else}
                            <img class="faculty-img" src="{avatar_placeholder}" alt="{faculty.name}">
                        {/if}
                    </div>
                    <div class="faculty-name">{faculty.name}</div>
                    <div class="faculty-role">{faculty.role}</div>
                    <div class="card-action-hint">
                        <span>View Details</span>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <!-- Student Section -->
    <h1 class="faculty-head">Student Execom</h1>
    <div class="faculty-div">
        {#each data.student_execom as student}
            <div
                class="faculty-grid clickable-card"
                onclick={() => openMember(student)}
                role="button"
                tabindex="0"
                onkeydown={(e) => (e.key === "Enter" || e.key === " ") && openMember(student)}
            >
                <div class="faculty-img-label">
                    {#if student.image}
                        <img class="faculty-img" src="data:image/webp;base64,{student.image}" alt="{student.name}">
                    {:else}
                        <img class="faculty-img" src="{avatar_placeholder}" alt="{student.name}">
                    {/if}
                </div>
                <div class="faculty-name">{student.name}</div>
                <div class="faculty-role">{student.role}</div>
                <div class="card-action-hint">
                    <span>View Details</span>
                    <svg class="hint-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
        {/each}
    </div>
</div>

<!-- Interactive Details Modal -->
{#if selectedMember}
    <div
        class="modal-backdrop"
        onclick={closeMember}
        role="button"
        tabindex="-1"
        aria-label="Close modal"
    >
        <div
            class="modal-card"
            onclick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            tabindex="0"
        >
            <!-- Close Button -->
            <button class="close-btn" onclick={closeMember} aria-label="Close details">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div class="modal-body">
                <!-- Left: Photo & Title -->
                <div class="modal-left">
                    <div class="modal-avatar-glow">
                        {#if selectedMember.image}
                            <img class="modal-avatar" src="data:image/webp;base64,{selectedMember.image}" alt="{selectedMember.name}">
                        {:else}
                            <img class="modal-avatar" src="{avatar_placeholder}" alt="{selectedMember.name}">
                        {/if}
                    </div>
                    <h2 class="modal-name">{selectedMember.name}</h2>
                    <p class="modal-role">{selectedMember.role}</p>
                    <div class="modal-accent-line"></div>
                </div>

                <!-- Right: Social & Contact Links -->
                <div class="modal-right">
                    <div class="modal-section-title">Connect & Contact</div>

                    <div class="contact-grid">
                        <!-- Instagram -->
                        {#if selectedMember.instagram}
                            <a
                                href="{getInstagramUrl(selectedMember.instagram)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-tile instagram-tile"
                            >
                                <div class="tile-icon instagram-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <div class="tile-info">
                                    <span class="tile-label">Instagram</span>
                                    <span class="tile-value">{getInstagramDisplay(selectedMember.instagram)}</span>
                                </div>
                                <span class="tile-arrow">↗</span>
                            </a>
                        {/if}

                        <!-- LinkedIn -->
                        {#if selectedMember.linkedin}
                            <a
                                href="{getLinkedinUrl(selectedMember.linkedin)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-tile linkedin-tile"
                            >
                                <div class="tile-icon linkedin-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72z"/>
                                    </svg>
                                </div>
                                <div class="tile-info">
                                    <span class="tile-label">LinkedIn</span>
                                    <span class="tile-value">{getLinkedinDisplay(selectedMember.linkedin)}</span>
                                </div>
                                <span class="tile-arrow">↗</span>
                            </a>
                        {/if}

                        <!-- GitHub -->
                        {#if selectedMember.github}
                            <a
                                href="{getGithubUrl(selectedMember.github)}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-tile github-tile"
                            >
                                <div class="tile-icon github-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                    </svg>
                                </div>
                                <div class="tile-info">
                                    <span class="tile-label">GitHub</span>
                                    <span class="tile-value">{getGithubDisplay(selectedMember.github)}</span>
                                </div>
                                <span class="tile-arrow">↗</span>
                            </a>
                        {/if}

                        <!-- Email -->
                        {#if selectedMember.email}
                            <a
                                href="{getEmailUrl(selectedMember.email)}"
                                class="contact-tile email-tile"
                            >
                                <div class="tile-icon email-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div class="tile-info">
                                    <span class="tile-label">Email</span>
                                    <span class="tile-value">{selectedMember.email}</span>
                                </div>
                                <span class="tile-arrow">↗</span>
                            </a>
                        {/if}

                        <!-- Phone -->
                        {#if selectedMember.phone}
                            <a
                                href="{getPhoneUrl(selectedMember.phone)}"
                                class="contact-tile phone-tile"
                            >
                                <div class="tile-icon phone-icon">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                    </svg>
                                </div>
                                <div class="tile-info">
                                    <span class="tile-label">Phone</span>
                                    <span class="tile-value">{selectedMember.phone}</span>
                                </div>
                                <span class="tile-arrow">↗</span>
                            </a>
                        {/if}

                        <!-- No Socials Notice -->
                        {#if !selectedMember.instagram && !selectedMember.github && !selectedMember.linkedin && !selectedMember.email && !selectedMember.phone}
                            <div class="empty-contact-box">
                                <p>Executive Committee Member</p>
                                <span>IEEE Student Branch BMCE</span>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

@keyframes fade-in-normal { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes fade-translate-in-normal {
    0% {
        opacity: 0;
        transform: translateY(14px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes modal-scale-in {
    0% {
        opacity: 0;
        transform: scale(0.92) translateY(20px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0px);
    }
}

@keyframes backdrop-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

.main {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    padding-bottom: 80px;
}

.faculty-head {
    font-size: clamp(2.2rem, 5vw, 3.6rem);
    font-family: 'Open Sans', sans-serif;
    background: transparent;
    -webkit-text-fill-color: #ffffff;
    text-align: center;
    margin: 36px auto 12px auto;
    padding: 8px;
    width: fit-content;
    animation: fade-translate-in-normal 1s ease 1;
    color: white;
    font-weight: 800;
}

.faculty-div {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 28px;
    row-gap: 24px;
    padding: 16px;
    width: 85%;
    max-width: 1200px;
}

.faculty-grid {
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 2px solid #ffffff30;
    padding: 24px 20px;
    row-gap: 8px;
    margin-top: 2vh;
    transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease, border-color 0.28s ease;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.35);
    opacity: 0;
    animation: fade-translate-in-normal 0.8s ease 1 forwards;
    position: relative;
    user-select: none;
}

.clickable-card {
    cursor: pointer;
}

.clickable-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0px 18px 45px rgba(1, 38, 127, 0.8), 0px 0px 30px rgba(99, 102, 241, 0.4);
    border-color: #6366f1;
}

.clickable-card:active {
    transform: translateY(-2px) scale(0.99);
}

.faculty-img-label {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 10px 10px 4px 10px;
}

.faculty-img {
    height: 180px;
    width: 180px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    border: 2px solid #ffffff40;
    object-fit: cover;
    transition: transform 0.28s ease, border-color 0.28s ease;
}

.clickable-card:hover .faculty-img {
    border-color: #818cf8;
    transform: scale(1.04);
}

.faculty-name {
    font-family: 'Open Sans', sans-serif;
    color: white;
    margin: 0;
    text-align: center;
    font-size: 21px;
    font-weight: 700;
    padding: 4px;
}

.faculty-role {
    font-family: 'Open Sans', sans-serif;
    color: #e2e8f0;
    opacity: 0.88;
    margin: 0;
    text-align: center;
    font-size: 15px;
    line-height: 1.4;
    padding: 2px;
    white-space: pre-line;
}

.card-action-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 10px;
    padding: 6px 14px;
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.35);
    border-radius: 9999px;
    color: #c7d2fe;
    font-size: 13px;
    font-weight: 600;
    width: fit-content;
    align-self: center;
    transition: all 0.25s ease;
}

.clickable-card:hover .card-action-hint {
    background: #6366f1;
    color: #ffffff;
    border-color: #6366f1;
    box-shadow: 0 4px 14px rgba(99, 102, 241, 0.5);
}

.hint-arrow {
    transition: transform 0.25s ease;
}

.clickable-card:hover .hint-arrow {
    transform: translateX(3px);
}

/* ========================================= */
/* MODAL STYLES */
/* ========================================= */
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.82);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
    animation: backdrop-fade-in 0.25s ease forwards;
}

.modal-card {
    position: relative;
    background: radial-gradient(circle at top left, #0d1b4c 0%, #060d26 60%, #02040e 100%);
    border: 2px solid rgba(99, 102, 241, 0.5);
    border-radius: 28px;
    width: 95%;
    max-width: 820px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(99, 102, 241, 0.3);
    padding: 40px;
    animation: modal-scale-in 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    outline: none;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 42px;
    height: 42px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 10;
}

.close-btn:hover {
    background: #ef4444;
    color: white;
    border-color: #ef4444;
    transform: rotate(90deg);
}

.modal-body {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 36px;
    align-items: center;
}

.modal-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-right: 12px;
}

.modal-avatar-glow {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.modal-avatar-glow::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #3b82f6, #06b6d4);
    opacity: 0.6;
    filter: blur(12px);
    z-index: 0;
}

.modal-avatar {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.6);
    object-fit: cover;
    z-index: 1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-name {
    font-family: 'Open Sans', sans-serif;
    color: #ffffff;
    font-size: 26px;
    font-weight: 800;
    margin: 0 0 8px 0;
    letter-spacing: -0.5px;
}

.modal-role {
    font-family: 'Open Sans', sans-serif;
    color: #a5b4fc;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 16px 0;
    line-height: 1.4;
    white-space: pre-line;
}

.modal-accent-line {
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #38bdf8);
    border-radius: 9999px;
}

.modal-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.modal-section-title {
    font-family: 'Open Sans', sans-serif;
    color: #94a3b8;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 700;
    margin-bottom: 4px;
}

.contact-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-tile {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 18px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    text-decoration: none;
    color: white;
    transition: all 0.22s ease;
}

.contact-tile:hover {
    transform: translateX(6px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
}

.tile-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.instagram-icon {
    background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
    color: white;
}
.instagram-tile:hover {
    border-color: #fd1d1d;
    box-shadow: 0 6px 20px rgba(253, 29, 29, 0.3);
}

.linkedin-icon {
    background: #0077b5;
    color: white;
}
.linkedin-tile:hover {
    border-color: #0077b5;
    box-shadow: 0 6px 20px rgba(0, 119, 181, 0.3);
}

.github-icon {
    background: #24292e;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}
.github-tile:hover {
    border-color: #ffffff;
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);
}

.email-icon {
    background: linear-gradient(135deg, #0284c7, #2563eb);
    color: white;
}
.email-tile:hover {
    border-color: #38bdf8;
    box-shadow: 0 6px 20px rgba(56, 189, 248, 0.3);
}

.phone-icon {
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
}
.phone-tile:hover {
    border-color: #10b981;
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
}

.tile-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
}

.tile-label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #94a3b8;
    font-weight: 700;
}

.tile-value {
    font-size: 14px;
    font-weight: 600;
    color: #f8fafc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tile-arrow {
    font-size: 18px;
    color: #64748b;
    transition: transform 0.2s ease, color 0.2s ease;
}

.contact-tile:hover .tile-arrow {
    transform: translate(2px, -2px);
    color: #ffffff;
}

.empty-contact-box {
    padding: 24px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px dashed rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    text-align: center;
}

.empty-contact-box p {
    color: #cbd5e1;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 4px 0;
}

.empty-contact-box span {
    color: #64748b;
    font-size: 13px;
}

/* ========================================= */
/* RESPONSIVE LAYOUTS */
/* ========================================= */
@media only screen and (max-width: 900px) and (min-width: 601px) {
    .faculty-div {
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 600px) {
    .faculty-div {
        width: 92%;
        grid-template-columns: 1fr;
    }

    .modal-card {
        padding: 24px 18px;
        max-height: 94vh;
    }

    .modal-body {
        grid-template-columns: 1fr;
        gap: 24px;
    }

    .modal-avatar {
        width: 150px;
        height: 150px;
    }

    .modal-name {
        font-size: 22px;
    }
}
</style>
