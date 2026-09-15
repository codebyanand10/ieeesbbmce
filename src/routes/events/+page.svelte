<script>
let event_poster_dir = "src/lib/assets/event-posters/";
let { data } = $props();

function getDateString(date) {
    return new Date(date).toDateString();
}

function get_event_status(value) {
    switch(value) {
        case 1: return "Coming Soon";
        case 2: return "Register Soon";
        case 3: return "Registration Closed";
        case 4: return "Ongoing";
        case 5: return "Event Completed";
    }

}

</script>

<div class="main">
    <h1 class="events-head">Events</h1>
    {#if data.event_count === 0}
        <h3 class="events-nil-head">No Events Anounced Yet</h3>
    {/if}
    {#each data.events as event}
        <div class="event-grid">
            <h1>{ event.name }</h1>
            <p>
                { event.description }
                <br>
                <b>📅Date:</b> {getDateString(event.date)}<br>
                <b>📍Venue:</b> {event.venue}
            </p>
            <img class="event-img" src="data:image/webp;base64,{event.image}" alt="{event_poster_dir}/placehold.webp">
            {#if event.reglink != "" && event.status == 2} 
                <a class="event-reglink-button" href="{event.reglink}" target="_blank">Register Now</a>
            {:else if event.reglink != "" && event.status == 4}
                <a class="event-reglink-button" href="{event.reglink}" target="_blank">{get_event_status(event.status)}</a>
            {:else}
                <a class="event-reglink-button-disabled" href="" >{get_event_status(event.status)}</a>
            {/if}
        </div>
    {/each}
</div>

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
}

.events-nil-head {
    font-family: 'Open Sans';
    -webkit-text-fill-color: #ffffff;
    align-content: center;
    text-align: center;
    animation: fade-translate-in-normal 1s ease 1;
    opacity: 0;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
}

.event-grid {
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 1px solid #ffffff40;
    display: grid;
    padding: 24px;
    height: 50vh;
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

.event-img {
    height: 50vh;
    border-radius: 12px;
    border: 2px solid #ffffff40;
    grid-column: 2;
    grid-row: 1 / span 3;
    justify-self: end;
}

.event-grid h1 {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    margin: 0;
    text-align: center;
}

.event-grid p {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    word-break: break-all;
}

.event-reglink-button {
    font-family: 'Open Sans';
    color: white;
    font-size: 24px;
    font-weight: 300;
    text-decoration: none;
    text-align: center;
    height: fit-content;
    width: fit-content;
    background-color: #00ff5555;
    border: 2px solid #ffffff40;
    border-radius: 50px;
    padding: 8px;
    transition: box-shadow 150ms linear, border 100ms linear;
}

.event-reglink-button-disabled {
    font-family: 'Open Sans';
    color: white;
    font-size: 24px;
    font-weight: 300;
    text-decoration: none;
    text-align: center;
    height: fit-content;
    width: fit-content;
    background-color: #ffffff55;
    border: 2px solid #ffffff40;
    border-radius: 50px;
    padding: 8px;
    transition: box-shadow 150ms linear, border 100ms linear;
}

@media only screen and (orientation: landscape) {
    .events-head {
        font-size: 6vh;
        margin: 0 auto;
        padding: 8px;
        margin-top: 24px;
        width: fit-content;
    }

    .event-grid {
        height: 50vh;
        column-gap: 5vh;
        margin-top: 5vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }

    .event-img {
        height: 50vh;
        grid-column: 2;
        grid-row: 1 / span 3;
        justify-self: end;
    }

    .event-grid h1 {
        grid-column: 1;
    }

    .event-grid p {
        grid-column: 1;
    }

    .event-reglink-button {
        padding-left: 12px;
        padding-right: 12px;
        grid-column: 1;
        grid-row: 3;
    }
    .event-reglink-button-disabled {
        padding-left: 12px;
        padding-right: 12px;
        grid-column: 1;
        grid-row: 3;
    }
}

@media only screen and (orientation: portrait) {
    .events-head {
        font-size: 8vw;
        margin: 0 auto;
        padding: 8px;
        margin-top: 24px;
        width: fit-content;
    }

    .event-grid {
        height: fit-content;
        row-gap: 5vw;
        margin-top: 5vw;
        margin-left: 5vw;
        margin-right: 5vw;
    }

    .event-img {
        height: 75vw;
        grid-column: 1;
        grid-row: 1 / span 1;
        justify-self: center;
    }

    .event-grid h1 {
        grid-column: 1;
        grid-row: 2;
        margin: 0;
        text-align: center;
    }

    .event-grid p {
        grid-column: 1;
        grid-row: 3;
        
    }

    .event-reglink-button {
        width: 90%;
        grid-column: 1;
        grid-row: 4;
    }
    .event-reglink-button-disabled {
        width: 90%;
        grid-column: 1;
        grid-row: 4;
    }

}

.event-grid:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.event-reglink-button:hover {
    box-shadow: 0px 8px 40px #00ff55;
    border: 2px solid #00ff55;
}


</style>
