<script>
    import avatar_placeholder from "$lib/assets/avatar.webp";

    let { data } = $props();

    function getImageSrc(img) {
        if (!img) return avatar_placeholder;
        if (typeof img === "string" && (img.startsWith("/") || img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:") || img.startsWith("blob:") || img.includes("."))) {
            return img;
        }
        return `data:image/webp;base64,${img}`;
    }
</script>

<div class="main">
    <!-- Faculty Section -->
    {#if data.faculty_execom && data.faculty_execom.length > 0}
        <h1 class="faculty-head">Faculty Execom</h1>
        <div class="faculty-div">
            {#each data.faculty_execom as faculty}
                <a
                    class="faculty-grid clickable-card"
                    href="/execom/{faculty.id}"
                >
                    <div class="faculty-img-label">
                        <img class="faculty-img" src="{getImageSrc(faculty.image)}" alt="{faculty.name}">
                    </div>
                    <div class="faculty-name">{faculty.name}</div>
                    <div class="faculty-role">{faculty.role}</div>
                    <div class="card-action-hint">
                        <span>View Profile</span>
                        <svg class="hint-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    <!-- Student Section -->
    <h1 class="faculty-head">Student Execom</h1>
    <div class="faculty-div">
        {#each data.student_execom as student}
            <a
                class="faculty-grid clickable-card"
                href="/execom/{student.id}"
            >
                <div class="faculty-img-label">
                    <img class="faculty-img" src="{getImageSrc(student.image)}" alt="{student.name}">
                </div>
                <div class="faculty-name">{student.name}</div>
                <div class="faculty-role">{student.role}</div>
                <div class="card-action-hint">
                    <span>View Profile</span>
                    <svg class="hint-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </a>
        {/each}
    </div>
</div>

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
    text-decoration: none;
    color: inherit;
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
}
</style>
