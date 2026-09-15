<script>

import black_logo from "$lib/assets/ieeesbbmce-logo.svg"
import ieee_logo from "$lib/assets/IEEE-logo.svg"
import sep_icon from "$lib/assets/sep.svg"

import  IntersectionObserver  from "svelte-intersection-observer";

let aboutsection = $state();

let mposX = $state(0)
let mposY = $state(0)
function mouse_move(event) {
    mposX = event.clientX;
    mposY = event.clientY;
}

</script>

<div class="main">
    <div class="big-title-div">
        <!-- <img class="big-title-img" src={black_logo_small}> -->
        <h1 class="big-title">IEEE STUDENT BRANCH</h1>
        <h2 class="small-title">Baselios Mathews II College of Engineering</h2>
    </div>
    <IntersectionObserver element={aboutsection}  let:intersecting once>
        <div bind:this={aboutsection} class="about-div">
            {#if intersecting}
                <h1 class="about-title">About IEEE</h1>
                <div class="about-grid">
                    <div class="about-what" width="50px">
                        <h1>What is IEEE?</h1>
                        <p>
                            IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.
                        </p>
                    </div>
                    <div class="about-item">
                        <h1>Mission</h1>
                        <p>
                            IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.
                        </p>
                    </div>
                    <div class="about-item">
                        <h1>Vision</h1>
                        <p>
                            IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.
                        </p>
                    </div>
                </div>
            {:else}
                <h1 class="about-title">About IEEE</h1>
                <div class="about-grid">
                    <div class="about-what" width="50px">
                        <h1>What is IEEE?</h1>
                        <p>
                            IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.
                        </p>
                    </div>
                    <div class="about-item">
                        <h1>Mission</h1>
                        <p>
                            IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.
                        </p>
                    </div>
                    <div class="about-item">
                        <h1>Vision</h1>
                        <p>
                            IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.
                        </p>
                    </div>
                </div>
            {/if}
        </div>
    </IntersectionObserver>
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

@property -- gradient-transition-pre {
    syntax: '<color>';
    initial-value: #00000055;
    inherits: false;
}

@property -- gradient-transition-post {
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

.big-title-div {
    display: block;
    align-content: center;
    height: 80vh;
}

.big-title {
    font-size: 8vh;
    font-family: 'Open Sans';
    background: transparent;
    border: 5px solid white;
    border-radius: 10px;
    -webkit-text-fill-color: #ffffff;
    align-content: center;
    text-align: center;
    margin: 0 auto;
    padding: 8px;
    width: fit-content;
    animation: fade-translate-in-normal 2s ease 1;
}
.small-title {
    font-size: 3vh;
    font-family: 'Open Sans';
    opacity: 0;
    font-weight: 300;
    -webkit-text-fill-color: white;
    text-align: center;
    animation: fade-in-normal 2s ease 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
}
.about-div {
    padding: 12px;
    height: max-content;
    margin-top: 20vh;
}
.about-title {
    font-size: 6vh;
    font-family: 'Open Sans';
    background: transparent;
    -webkit-text-fill-color: #ffffff;
    align-content: center;
    text-align: center;
    margin: 0 auto;
    padding: 8px;
    animation: fade-translate-in-normal 1s ease 1;
}
.about-what {
    background: radial-gradient(circle at bottom left, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 1px solid #ffffff40;
    width: 100%;
    grid-column: 1;
    opacity: 0;
    grid-row: 1 / span 2;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 250ms;
    animation-fill-mode: forwards;
}
.about-item {
    background: radial-gradient(circle at bottom right, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border: 1px solid #ffffff40;
    border-radius: 24px;
    width: 100%;
    grid-column: 2;
    opacity: 0;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
}

.about-grid {
    display: grid;
    gap: 12px;
}

@media only screen and (orientation: landscape) {
    .big-title {
        font-size: 8vh;
        width: fit-content;
    }
    .small-title {
        font-size: 3vh;
    }
    .about-div {
        padding: 12px;
        margin-top: 20vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }
    .about-title {
        font-size: 6vh;
        margin: 0 auto;
        padding: 8px;
        width: fit-content;
    }
    .about-what {
        width: 100%;
        grid-column: 1;
        grid-row: 1 / span 2;
    }
    .about-item {
        width: 100%;
        grid-column: 2;
    }
    
}

@media only screen and (orientation: portrait) {
    .big-title-div {
        width: 100%;
        margin: 0 auto;
        margin-top: -50px;
    }

    .big-title {
        font-size: 6vw;
        width: 80vw;
    }
    .small-title {
        font-size: 6vw;
    }
    .about-div {
        padding: 12px;
        margin-top: 20vh;
    }
    .about-title {
        font-size: 8vw;
        margin: 0 0;
        padding: 8px;
    }
    .about-what {
        width: 100%;
        grid-column: 1;
    }
    .about-item {
        width: 100%;
        grid-column: 1;
    }
}

.about-what:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.about-what h1 {
    font-family: 'Open Sans';
    float: bottom;
    padding: 24px;
    color: white;
}

.about-what p {
    font-family: 'Open Sans';
    padding: 24px;
    color: white
}

.about-item:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.about-item h1 {
    font-family: 'Open Sans';
    padding: 24px;
    color: white;
}

.about-item p {
    font-family: 'Open Sans';
    padding: 24px;
    color: white
}

</style>
