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
            <div class="faculty-grid">
                <div class="faculty-img-label">
                    {#if student.image}
                        <img class="faculty-img" src="data:image/webp;base64,{student.image}" alt="{student.name}">
                    {:else}
                        <img class="faculty-img" src="{avatar_placeholder}" alt="{student.name}">
                    {/if}
                </div>
                <div class="faculty-name">{student.name}</div>
                <div class="faculty-role">{student.role}</div>
            </div>
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

.faculty-grid:hover {
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
}

@media only screen and (max-width: 600px) {
    .faculty-div {
        width: 92%;
        grid-template-columns: 1fr;
    }
}
</style>
