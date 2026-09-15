<script>
    import avatar_placeholder from "$lib/assets/avatar.webp";
    import { goto } from "$app/navigation";

    let { data } = $props();
    let member = $derived(data.member || data.student);

    function getInstagramUrl(handle) {
        if (!handle) return "#";
        if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
        const cleanHandle = handle.replace(/^@/, "").trim();
        return `https://www.instagram.com/${cleanHandle}`;
    }

    function getGithubUrl(handle) {
        if (!handle) return "#";
        if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
        const cleanHandle = handle.replace(/^@/, "").trim();
        return `https://github.com/${cleanHandle}`;
    }

    function getLinkedinUrl(handle) {
        if (!handle) return "#";
        if (handle.startsWith("http://") || handle.startsWith("https://")) return handle;
        const cleanHandle = handle.replace(/^@/, "").trim();
        return `https://www.linkedin.com/in/${cleanHandle}`;
    }

    function getEmailUrl(email) {
        if (!email) return "#";
        return `mailto:${email.trim()}`;
    }
</script>

<svelte:head>
    <title>{member.name} | IEEE SB BMCE</title>
</svelte:head>

<div class="page-container">
    <div class="top-bar">
        <a href="/execom" class="back-btn" aria-label="Back to Execom" title="Back to Execom">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
        </a>
    </div>

    <main class="profile-card">
        <!-- Left Column: Portrait & Info -->
        <div class="profile-left">
            <div class="avatar-glow-wrap">
                <div class="avatar-wrapper">
                    {#if member.image}
                        <img class="profile-avatar" src="data:image/webp;base64,{member.image}" alt="{member.name}">
                    {:else}
                        <img class="profile-avatar" src="{avatar_placeholder}" alt="{member.name}">
                    {/if}
                </div>
            </div>

            <h1 class="student-name">{member.name}</h1>
            <p class="student-role">{member.role}</p>
            <div class="accent-bar"></div>
        </div>

        <!-- Center Divider (Desktop) -->
        <div class="card-divider" aria-hidden="true"></div>

        <!-- Right Column: Connect Tiles -->
        <div class="profile-right">
            <div class="connect-header">
                <h2 class="connect-title">Connect & Contact</h2>
                <div class="connect-accent-bar"></div>
            </div>

            <div class="connect-list">
                <!-- Instagram -->
                {#if member.instagram}
                    <a href="{getInstagramUrl(member.instagram)}" target="_blank" rel="noopener noreferrer" class="connect-card instagram-tile">
                        <div class="icon-box instagram-box">
                            <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        <div class="card-text">
                            <span class="card-platform-title">Instagram</span>
                        </div>
                        <span class="card-arrow">↗</span>
                    </a>
                {/if}

                <!-- LinkedIn -->
                {#if member.linkedin}
                    <a href="{getLinkedinUrl(member.linkedin)}" target="_blank" rel="noopener noreferrer" class="connect-card linkedin-tile">
                        <div class="icon-box linkedin-box">
                            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72z"/>
                            </svg>
                        </div>
                        <div class="card-text">
                            <span class="card-platform-title">LinkedIn</span>
                        </div>
                        <span class="card-arrow">↗</span>
                    </a>
                {/if}

                <!-- GitHub -->
                {#if member.github}
                    <a href="{getGithubUrl(member.github)}" target="_blank" rel="noopener noreferrer" class="connect-card github-tile">
                        <div class="icon-box github-box">
                            <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                        </div>
                        <div class="card-text">
                            <span class="card-platform-title">GitHub</span>
                        </div>
                        <span class="card-arrow">↗</span>
                    </a>
                {/if}

                <!-- Email -->
                {#if member.email}
                    <a href="{getEmailUrl(member.email)}" class="connect-card email-tile">
                        <div class="icon-box email-box">
                            <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <div class="card-text">
                            <span class="card-label">Email</span>
                            <span class="card-value">{member.email}</span>
                        </div>
                        <span class="card-arrow">↗</span>
                    </a>
                {/if}

                {#if !member.instagram && !member.github && !member.linkedin && !member.email}
                    <div class="empty-notice">
                        <p>Executive Committee Member</p>
                        <span>IEEE Student Branch BMCE</span>
                    </div>
                {/if}
            </div>
        </div>
    </main>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Inter:wght@400;500;600;700;800&display=swap');

    @keyframes fade-up {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .page-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 100px);
        padding: 24px 16px 60px;
        box-sizing: border-box;
        font-family: 'Open Sans', 'Inter', sans-serif;
        position: relative;
        z-index: 1;
    }

    .top-bar {
        width: 100%;
        max-width: 960px;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
    }

    .back-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: rgba(1, 38, 127, 0.5);
        border: 1.5px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        color: #ffffff;
        cursor: pointer;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        text-decoration: none;
        transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    }

    .back-btn:hover {
        background: rgba(1, 38, 127, 0.9);
        border-color: #6366f1;
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.55);
        transform: scale(1.08);
    }

    .back-btn svg {
        transition: transform 0.2s ease;
    }

    .back-btn:hover svg {
        transform: translateX(-3px);
    }


    /* Main Card */
    .profile-card {
        width: 100%;
        max-width: 960px;
        background: radial-gradient(circle at top left, rgba(1, 38, 127, 0.5) 0%, rgba(1, 22, 95, 0.6) 45%, rgba(0, 0, 0, 0.75) 100%);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1.5px solid rgba(255, 255, 255, 0.18);
        border-radius: 32px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.65), 0 0 40px rgba(1, 38, 127, 0.3);
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 48px;
        gap: 48px;
        box-sizing: border-box;
        animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        overflow: hidden;
    }

    /* Left Side: Avatar & Name */
    .profile-left {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .avatar-wrapper {
        width: 250px;
        height: 320px;
        border-radius: 24px;
        overflow: hidden;
        border: 2px solid rgba(255, 255, 255, 0.25);
        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }

    .avatar-wrapper:hover {
        transform: scale(1.02);
        border-color: rgba(99, 102, 241, 0.8);
        box-shadow: 0 20px 45px rgba(1, 38, 127, 0.4);
    }

    .profile-avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .student-name {
        margin: 20px 0 4px 0;
        font-size: 30px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -0.5px;
        line-height: 1.2;
    }

    .student-role {
        margin: 4px 0 0 0;
        font-size: 13px;
        font-weight: 700;
        color: #818cf8;
        letter-spacing: 3px;
        text-transform: uppercase;
        max-width: 300px;
        line-height: 1.5;
        white-space: pre-line;
    }

    .accent-bar {
        width: 48px;
        height: 4px;
        background: linear-gradient(90deg, #6366f1, #3b82f6);
        border-radius: 4px;
        margin-top: 12px;
    }

    /* Divider */
    .card-divider {
        width: 1px;
        align-self: stretch;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0.05));
    }

    /* Right Side: Connect Section */
    .profile-right {
        flex: 1.2;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .connect-header {
        margin-bottom: 20px;
    }

    .connect-title {
        font-size: 30px;
        font-weight: 800;
        color: #ffffff;
        margin: 0;
        letter-spacing: -0.5px;
    }

    .connect-accent-bar {
        width: 38px;
        height: 4px;
        background: #6366f1;
        border-radius: 4px;
        margin-top: 8px;
    }

    .connect-list {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
    }

    /* Connect Item Tile */
    .connect-card {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 18px;
        background: #f8fafc;
        border-radius: 16px;
        text-decoration: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border: 1.5px solid transparent;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
    }

    .connect-card:hover {
        transform: translateY(-2px) translateX(4px);
        background: #ffffff;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25), 0 0 20px rgba(99, 102, 241, 0.2);
    }

    .card-text {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .card-platform-title {
        font-size: 15px;
        font-weight: 700;
        color: #0f172a;
        letter-spacing: 0.2px;
    }

    .card-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        margin-bottom: 2px;
    }

    .card-value {
        font-size: 14px;
        font-weight: 700;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-arrow {
        margin-left: auto;
        font-size: 16px;
        color: #94a3b8;
        transition: transform 0.2s ease, color 0.2s ease;
    }

    .connect-card:hover .card-arrow {
        transform: translate(2px, -2px);
        color: #0f172a;
    }

    /* Icon Box & Monochromatic/Color Transition */
    .icon-box {
        width: 44px;
        height: 44px;
        min-width: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        /* Default: Black & White / Grayscale */
        filter: grayscale(100%) contrast(110%);
        opacity: 0.85;
        transition: filter 0.35s ease, opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
    }

    .social-icon {
        width: 24px;
        height: 24px;
        display: block;
    }

    /* Specific Brand Colors on Hover */
    .instagram-box {
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    }

    .github-box {
        background: #181717;
        color: #ffffff;
    }

    .linkedin-box {
        background: #0a66c2;
    }

    .email-box {
        background: #ea4335;
    }

    /* On Hover: Switch to full color & subtle scale effect */
    .connect-card:hover .icon-box {
        filter: grayscale(0%) contrast(100%);
        opacity: 1;
        transform: scale(1.1);
    }

    .instagram-tile:hover {
        border-color: #d6249f;
    }

    .github-tile:hover {
        border-color: #181717;
    }

    .linkedin-tile:hover {
        border-color: #0a66c2;
    }

    .email-tile:hover {
        border-color: #ea4335;
    }

    .empty-notice {
        padding: 24px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px dashed rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
        font-size: 14px;
    }

    /* Responsive Design */
    @media (max-width: 840px) {
        .profile-card {
            flex-direction: column;
            padding: 32px 24px;
            gap: 36px;
        }

        .card-divider {
            width: 80%;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, transparent);
        }

        .profile-right {
            width: 100%;
        }

        .connect-header {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .avatar-wrapper {
            width: 220px;
            height: 280px;
        }

        .student-name {
            font-size: 26px;
        }
    }
</style>
