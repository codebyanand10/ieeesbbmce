<script>
    import avatar_placeholder from "$lib/assets/avatar.webp";
    let { data } = $props();
</script>

<div class="main">
    <h1 class="faculty-head">Faculty Execom</h1>
    <div class="faculty-div">
        {#each data.faculty_execom as faculty}
            <div class="faculty-grid">
                <div class="faculty-img-label">
                    {#if faculty.image}
                        <img class="faculty-img" src="data:image/webp;base64,{faculty.image}" alt="{faculty.name}">
                    {:else}
                        <img class="faculty-img" src="{avatar_placeholder}" alt="{faculty.name}">
                    {/if}
                </div>
                <div class="faculty-name">{faculty.name}</div>
                <div class="faculty-role">{faculty.role}</div>
            </div>
        {/each}
    </div>

    <h1 class="faculty-head">Student Execom</h1>
    <div class="faculty-div">
        {#each data.student_execom as student}
            <a class="faculty-grid student-grid-link {student.name.toLowerCase().includes('renesh') ? 'center-card' : ''}" href="/execom/{student.id}">
                <div class="faculty-img-label">
                    {#if student.image}
                        <img class="faculty-img" src="data:image/webp;base64,{student.image}" alt="{student.name}">
                    {:else}
                        <img class="faculty-img" src="{avatar_placeholder}" alt="{student.name}">
                    {/if}
                </div>
                <div class="faculty-name">{student.name}</div>
                <div class="faculty-role">{student.role}</div>
                <div class="view-profile-tag">
                    <span>View Profile</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
        transform: translateY(10px);
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
    padding-bottom: 60px;
}

.faculty-div {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 28px;
    row-gap: 20px;
    padding: 12px;
    width: 85%;
    max-width: 1200px;
    align-self: center;
}

.center-card {
    grid-column: 2;
}

.faculty-grid {
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 2px solid #ffffff40;
    padding: 24px;
    row-gap: 10px;
    margin-top: 3vh;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    opacity: 0;
    animation: fade-translate-in-normal 0.8s ease 1 forwards;
    position: relative;
}

.student-grid-link {
    text-decoration: none;
    cursor: pointer;
}

.student-grid-link:hover {
    transform: translateY(-8px);
    box-shadow: 0px 16px 40px rgba(1, 38, 127, 0.7), 0px 0px 25px rgba(99, 102, 241, 0.35);
    border-color: #6366f1;
}

.faculty-grid:not(.student-grid-link):hover {
    box-shadow: 0px 12px 40px #01267f;
    border-color: #01267f;
}

.faculty-img-label {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 12px 12px 4px 12px;
}

.faculty-img {
    height: 190px;
    width: 190px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    border: 2px solid #ffffff40;
    object-fit: cover;
    transition: transform 0.25s ease, border-color 0.25s ease;
}

.student-grid-link:hover .faculty-img {
    border-color: #6366f1;
    transform: scale(1.03);
}

.faculty-name {
    font-family: 'Open Sans', sans-serif;
    color: white;
    margin: 0;
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    padding: 4px;
}

.faculty-role {
    font-family: 'Open Sans', sans-serif;
    color: #e2e8f0;
    opacity: 0.85;
    margin: 0;
    text-align: center;
    font-size: 16px;
    line-height: 1.4;
    padding: 2px;
    white-space: pre-line;
}

.view-profile-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 8px;
    padding: 6px 14px;
    background: rgba(99, 102, 241, 0.15);
    border: 1px solid rgba(99, 102, 241, 0.3);
    border-radius: 9999px;
    color: #a5b4fc;
    font-size: 13px;
    font-weight: 600;
    width: fit-content;
    align-self: center;
    transition: all 0.2s ease;
}

.arrow-icon {
    transition: transform 0.2s ease;
}

.student-grid-link:hover .view-profile-tag {
    background: #6366f1;
    color: #ffffff;
    border-color: #6366f1;
}

.student-grid-link:hover .arrow-icon {
    transform: translateX(3px);
}

.faculty-head {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-family: 'Open Sans', sans-serif;
    background: transparent;
    -webkit-text-fill-color: #ffffff;
    text-align: center;
    margin: 32px auto 8px auto;
    padding: 8px;
    width: fit-content;
    animation: fade-translate-in-normal 1s ease 1;
    color: white;
    font-weight: 800;
}

@media only screen and (max-width: 900px) and (min-width: 601px) {
    .faculty-div {
        width: 90%;
        grid-template-columns: repeat(2, 1fr);
    }
    .center-card {
        grid-column: auto;
    }
}

@media only screen and (max-width: 600px) {
    .faculty-div {
        width: 92%;
        grid-template-columns: 1fr;
    }
    .center-card {
        grid-column: auto;
    }
}
</style>
