
<script>


import event_poster_placeholder from "$lib/assets/event-posters/placehold.webp";
import avatar_placeholder from "$lib/assets/avatar.webp";
let { data, form } = $props();
let tab_index = $state(0);
let img_src = $state("");
let img_src2 = $state("");

function update_event_image(event) {
    img_src = URL.createObjectURL(event.target.files[0]);
}

function update_student_image(event) {
    img_src2 = URL.createObjectURL(event.target.files[0]);
}

function change_tab(i) {
    tab_index = i;
}

</script>

{#if !form?.auth}
    <div class="main-login">
        <form class="login-form" method="POST" action="?/login">
	          <label class="login-form-label">
		            Username
                <input class="login-form-textbox" name="username" type="text">
	          </label>
	          <label class="login-form-label">
		            Password
		            <input class="login-form-textbox" name="password" type="password">
	          </label>
	          <button class="login-form-button">Log in</button>
        </form>
    </div>
{/if}

{#if form?.auth}
    <div class="main">
        <div class="tabbar">
            <button class="tabbar-button" style="background-color: {tab_index===0 ? '#01267f99' : 'transparent'};" onclick={ () => change_tab(0) }>Events</button>
            <button class="tabbar-button" style="background-color: {tab_index===1 ? '#01267f99' : 'transparent'};" onclick={ () => change_tab(1) }>Execom</button>
        </div>
        {#if tab_index===0}
            <h1 class="events-head">Events</h1>
            <form class="event-grid" method="POST" action="?/add_event" enctype="multipart/form-data">
                <input type="text" class="event-name-textbox" name="event-name" placeholder="Event Name">
                <textarea class="event-desc-textbox" name="event-description" placeholder="Event Description"></textarea>
                <input type="date" class="event-date-picker" name="event-date">
                <input type="text" class="event-venue-textbox" name="event-venue" placeholder="Event Venue">
                <input type="url" class="event-reglink-textbox" name="event-reglink" placeholder="Event Registration Link">
                <select class="event-status-select" name="event-status">
                    <option value="1">Coming Soon</option>
                    <option value="2">Register Now</option>
                    <option value="3">Registration Closed</option>
                    <option value="4">Ongoing</option>
                    <option value="5">Event Completed</option>
                </select>
                <label class="event-img-label" for="event-img-picker">
                    {#if img_src}
                        <img class="event-img" src="{img_src}" alt="BMCE">
                    {:else}
                        <img class="event-img" src="{event_poster_placeholder}" alt="BMCE">
                    {/if}
                </label>
                <input type="file" class="event-img-picker" id="event-img-picker" name="event-img" accept="image/*" onchange={update_event_image}>
                <button class="event-add-button" type="submit">Add</button>
            </form>
            {#each data.events as event}
                <form class="event-grid" method="POST" action="?/update_event" enctype="multipart/form-data">
                    <input type="text" class="event-name-textbox" name="event-name" value="{event.name}" placeholder="Event Name">
                    <textarea class="event-desc-textbox" name="event-description" placeholder="Event Description">{event.description}</textarea>
                    <input type="date" class="event-date-picker" name="event-date" value="{event.date}">
                    <input type="text" class="event-venue-textbox" name="event-venue" placeholder="Event Venue" value="{event.venue}">
                    <input type="url" class="event-reglink-textbox" name="event-reglink" value={event.reglink}  placeholder="Event Registration Link">
                    <select class="event-status-select" name="event-status">
                        <option value="1" selected={event.status === 1}>Coming Soon</option>
                        <option value="2" selected={event.status === 2}>Register Now</option>
                        <option value="3" selected={event.status === 3}>Registration Closed</option>
                        <option value="4" selected={event.status === 4}>Ongoing</option>
                        <option value="5" selected={event.status === 5}>Event Completed</option>
                    </select>
                    <label class="event-img-label" for="event-img-picker-{event.id}">
                        <img class="event-img" src="data:image/webp;base64,{event.image}" alt="placehold.webp">
                    </label>
                    <input type="file" class="event-img-picker" id="event-img-picker-{event.id}" name="event-img" accept="image/*">
                    <input type="hidden" name="id" value={event.id} />
                    <button class="event-add-button" type="submit">Apply</button>
                    <button class="event-delete-button" type="submit" formaction="?/remove_event">Remove</button>
                </form>
            {/each}
        {/if}
        {#if tab_index===1}
            <h1 class="events-head">Faculty Execom</h1>
            <div class="faculty-div">
                <form class="faculty-grid" method="POST" action="?/add_fac_execom" enctype="multipart/form-data">
                    <label class="faculty-img-label" for="faculty-img-picker">
                        {#if img_src}
                            <img class="faculty-img" src="{img_src}" alt="placehold.webp">
                        {:else}
                            <img class="faculty-img" src="{avatar_placeholder}" alt="placehold.webp">
                        {/if}
                    </label>
                    <input type="text" class="faculty-name-textbox" name="name" placeholder="Faculty Name">
                    <input type="text" class="faculty-name-textbox" name="role" placeholder="Faculty Role">
                    <input type="file" class="faculty-img-picker" id="faculty-img-picker" name="image" accept="image/*" onchange={update_event_image}>
                    <button class="event-add-button" type="submit">Add</button>
                </form>
                {#each data.faculty_execom as faculty}
                    <form class="faculty-grid" method="POST" action="?/update_fac_execom" enctype="multipart/form-data">
                        <label class="faculty-img-label" for="faculty-img-picker-{faculty.id}">
                            {#if faculty.image}
                                <img class="faculty-img" src="data:image/webp;base64,{faculty.image}" alt="placehold.webp">
                            {:else}
                                <img class="faculty-img" src="{avatar_placeholder}" alt="placehold.webp">
                            {/if}
                        </label>
                        <input type="text" class="faculty-name-textbox" name="name" value="{faculty.name}" placeholder="Faculty Name">
                        <input type="text" class="faculty-name-textbox" name="role" value="{faculty.role}" placeholder="Faculty Role">
                        <input type="file" class="faculty-img-picker" id="faculty-img-picker-{faculty.id}" name="image" accept="image/*">
                        <input type="hidden" name="id" value={faculty.id} />
                        <button class="event-add-button" type="submit">Apply</button>
                        <button class="event-delete-button" type="submit" formaction="?/remove_fac_execom">Remove</button>
                    </form>
                {/each}
            </div>
            <h1 class="events-head">Student Execom</h1>
            <div class="faculty-div">
                <form class="faculty-grid" method="POST" action="?/add_std_execom" enctype="multipart/form-data">
                    <label class="faculty-img-label" for="student-img-picker">
                        {#if img_src2}
                            <img class="faculty-img" src="{img_src2}" alt="placehold.webp">
                        {:else}
                            <img class="faculty-img" src="{avatar_placeholder}" alt="placehold.webp">
                        {/if}
                    </label>
                    <input type="text" class="faculty-name-textbox" name="name" placeholder="Student Name" required>
                    <input type="text" class="faculty-name-textbox" name="role" placeholder="Student Role" required>
                    <input type="text" class="faculty-name-textbox" name="instagram" placeholder="Instagram Username (e.g. i.4_anand)">
                    <input type="text" class="faculty-name-textbox" name="github" placeholder="GitHub Username (e.g. codebyanand10)">
                    <input type="text" class="faculty-name-textbox" name="linkedin" placeholder="LinkedIn (e.g. anand)">
                    <input type="email" class="faculty-name-textbox" name="email" placeholder="Email (e.g. anandanil107@gmail.com)">
                    <input type="tel" class="faculty-name-textbox" name="phone" placeholder="Phone Number (e.g. 7994980107)">
                    <input type="file" class="faculty-img-picker" id="student-img-picker" name="image" accept="image/*" onchange={update_student_image}>
                    <button class="event-add-button" type="submit">Add</button>
                </form>
                {#each data.student_execom as student}
                    <form class="faculty-grid" method="POST" action="?/update_std_execom" enctype="multipart/form-data">
                        <label class="faculty-img-label" for="student-edit-img-picker-{student.id}">
                            {#if student.image}
                                <img class="faculty-img" src="data:image/webp;base64,{student.image}" alt="placehold.webp">
                            {:else}
                                <img class="faculty-img" src="{avatar_placeholder}" alt="placehold.webp">
                            {/if}
                        </label>
                        <input type="text" class="faculty-name-textbox" name="name" value="{student.name || ''}" placeholder="Student Name">
                        <input type="text" class="faculty-name-textbox" name="role" value="{student.role || ''}" placeholder="Student Role">
                        <input type="text" class="faculty-name-textbox" name="instagram" value="{student.instagram || ''}" placeholder="Instagram Username">
                        <input type="text" class="faculty-name-textbox" name="github" value="{student.github || ''}" placeholder="GitHub Username">
                        <input type="text" class="faculty-name-textbox" name="linkedin" value="{student.linkedin || ''}" placeholder="LinkedIn Profile">
                        <input type="email" class="faculty-name-textbox" name="email" value="{student.email || ''}" placeholder="Email Address">
                        <input type="tel" class="faculty-name-textbox" name="phone" value="{student.phone || ''}" placeholder="Phone Number">
                        <input type="file" class="faculty-img-picker" id="student-edit-img-picker-{student.id}" name="image" accept="image/*">
                        <input type="hidden" name="id" value={student.id} />
                        <button class="event-add-button" type="submit">Apply</button>
                        <button class="event-delete-button" type="submit" formaction="?/remove_std_execom">Remove</button>
                    </form>
                {/each}
            </div>
        {/if}
    </div>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    @keyframes fade-in-normal {0% { opacity: 0; } 100% { opacity: 1;} }
    @keyframes fade-translate-in-normal {
    0% {
    opacity: 0;
    translate: 0px 10px;
    }
    100% {
    opacity: 1;
    translate: 0px 0px;
    }
    }

    @keyframes rev-translate-in-normal {
    0% {
    translate: 0px -8px;
    }
    100% {
    translate: 0px 0px;
    }
    }

    @keyframes gradient {
    0% { background-size: 100% 100%; }
    50% { background-size: 130% 130%; }
    100% { background-size: 100% 100%; }
    }

    @property --gradient-transition-pre {
    syntax: '<color>';
    initial-value: #00000055;
    inherits: false;
    }

    @property --gradient-transition-post {
    syntax: '<color>';
    initial-value: #00000055;
    inherits: false;
    }

    .main {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: 100%;
    }

    .main-login {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    }

    .login-form {
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 2px solid #ffffff40;
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 50vh;
    width: 40vw;
    column-gap: 5vh;
    margin-top: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    align-items: center;
    }

    .login-form-label {
    font-family: 'Open Sans';
    font-size: 24px;
    color: white;
    padding: 12px;
    }

    .login-form-textbox {
    font-family: 'Open Sans';
    color: white;
    margin: 0;
    text-align: center;
    height: 1em;
    width: 100%;
    font-size: 24px;
    background-color: #00000055;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    padding: 8px;
    }

    .login-form-button {
    color: white;
    font-size: 24px;
    height: fit-content;
    width: fit-content;
    background-color: #01267f55;
    border: 2px solid #ffffff40;
    border-radius: 8px;
    padding: 8px;
    margin: 12px;
    }

    .tabbar {
    display: flex;
    background: radial-gradient(circle at bottom right, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border: 1px solid #ffffff40;
    border-radius: 24px;
    margin-top: 24px;
    width: fit-content;
    grid-column: 2;
    opacity: 1;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    align-self: center;
    padding: 8px;
    }

    .tabbar-button {
    font-size: 24px;
    font-family: 'Open Sans';
    background: transparent;
    border: 1px solid #ffffff40;
    border-radius: 20px;
    -webkit-text-fill-color: #ffffff;
    align-content: center;
    text-align: center;
    margin-right: 24px;
    margin-left: 24px;
    padding: 12px;
    width: fit-content;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    animation: fade-translate-in-normal 1s ease 1;
    color: white;
    align-content: center; 
    }

    .faculty-div {
    align-self: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 24px;
    padding: 12px;
    width: 80%;
    align-self: center;
    }

    .faculty-grid {
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 2px solid #ffffff40;
    padding: 24px;
    row-gap: 12px;
    margin-top: 5vh;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    }

    .faculty-img-label {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 12px;
    }

    .faculty-img {
    height: 200px;
    width: 200px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    border: 2px solid #ffffff40;
    object-fit: cover;
    transition: box-shadow 200ms linear, border 100ms linear;
    }

    .faculty-name-textbox {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    margin: 0;
    text-align: center;
    height: 1em;
    font-size: 24px;
    background-color: #00000055;
    border-radius: 12px;
    border: 1px solid #ffffff40;
    padding: 8px;
    }

    @media only screen and (orientation: landscape) {
    .events-head {
    font-size: 6vh;
    font-family: 'Open Sans';
    background: transparent;
    -webkit-text-fill-color: #ffffff;
    align-content: center;
    text-align: center;
    margin: 0 auto;
    padding: 8px;
    margin-top: 24px;
    width: fit-content;
    animation: fade-translate-in-normal 1s ease 1;
    color: white;
    align-content: center;
    padding: 12;
    }

    .event-grid {
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 2px solid #ffffff40;
    display: grid;
    padding: 24px;
    height: 60vh;
    column-gap: 5vh;
    margin-top: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    }

    .event-img-label {
    height: 50vh;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    grid-column: 2;
    grid-row: 1 / span 5;
    justify-self: end;
    }

    .event-img {
    height: 50vh;
    border-radius: 12px;
    justify-self: end;
    }

    .event-name-textbox {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    margin: 0;
    text-align: center;
    height: 1em;
    font-size: 2em;
    background-color: #00000055;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    padding: 8px;
    }

    .event-desc-textbox {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    background-color: #00000055;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    padding: 8px;
    }

    .event-date-picker {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    background-color: #00000055;
    border-radius: 8px;
    border: 2px solid #ffffff40;
    width: fit-content;
    height: 1em;
    margin-top: 12px;
    padding: 8px;
    }

    .event-venue-textbox {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    padding: 8px;
    margin: 0;
    height: 2em;
    width: 50%;
    background-color: #00000055;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    }

    .event-reglink-textbox {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    padding: 8px;
    margin: 0;
    height: 2em;
    width: 50%;
    background-color: #00000055;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    }

    .event-status-select {
    font-family: 'Open Sans';
    color: white;
    grid-column: 2;
    padding: 8px;
    margin: 0;
    width: 60%;
    background-color: #00000055;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    justify-self: end;
    }

    .event-add-button {
    color: white;
    font-size: 24px;
    height: fit-content;
    width: fit-content;
    background-color: #01267f55;
    border: 2px solid #ffffff40;
    border-radius: 8px;
    padding: 4px;
    grid-column: 1;
    grid-row: 6;
    }

    .event-delete-button {
    color: white;
    font-size: 24px;
    height: fit-content;
    width: fit-content;
    background-color: #f0000055;
    border: 2px solid #ffffff40;
    border-radius: 8px;
    padding: 4px;
    grid-column: 1;
    grid-row: 6;
    justify-self: end;
    }
    }

    @media only screen and (orientation: portrait) {
    .events-head {
    font-size: 8vw;
    font-family: 'Open Sans';
    background: transparent;
    -webkit-text-fill-color: #ffffff;
    align-content: center;
    text-align: center;
    margin: 0 auto;
    padding: 8px;
    margin-top: 24px;
    width: fit-content;
    animation: fade-translate-in-normal 1s ease 1;
    color: white;
    align-content: center;
    }

    .event-grid {
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 2px solid #ffffff40;
    display: grid;
    padding: 24px;
    height: fit-content;
    row-gap: 5vw;
    margin-top: 5vw;
    margin-left: 5vw;
    margin-right: 5vw;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 100ms;
    animation-fill-mode: forwards;
    }

    .event-img {
    height: 75vw;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    grid-column: 1;
    grid-row: 1 / span 1;
    justify-self: center;
    }

    }

    .event-img-picker {
    opacity: 0;
    grid-column: 2;
    justify-self: end;
    }

    .faculty-img-picker {
    opacity: 0;
    grid-column: 2;
    justify-self: end;
    }

    .event-grid:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 2px solid #01267f;
    }

    .faculty-grid:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 2px solid #01267f;
    }

    .faculty-img:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 2px solid #01267f;
    }

    .event-img-label:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 2px solid #01267f;
    }

    .event-add-button:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 2px solid #01267f;
    }

    .tabbar-button:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
    }

    .login-form-button:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 2px solid #01267f;
    }

    .event-delete-button:hover {
    box-shadow: 0px 12px 40px #f00000;
    border: 2px solid #f00000;
    }

</style>
