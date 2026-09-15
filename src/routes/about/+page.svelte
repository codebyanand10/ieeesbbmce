<script>''

import bmce_building from "$lib/assets/bmce-building.webp"

import { MultipleIntersectionObserver } from "svelte-intersection-observer";

let grid1;
let grid2;
let grid3;

$: elements = [grid1, grid2, grid3];

</script>

<div class="main">
    <h1 class="about-head">About Us</h1>
    <MultipleIntersectionObserver {elements} let:elementIntersections once>
        <div bind:this={grid1} class="bmce-grid">
            {#if elementIntersections.get(grid1)}
                <img class="bmce-img" src={bmce_building} alt="BMCE">
                <h2>Baselios Mathews II College of Engineering (BMCE)</h2>
                <p>
                    The noble commitment to serve humanity through the elixir of technical education has led us to establish this institute par excellence we believe we can impregnate students the zeal and vigor that we ourselves are endowed with. We strive to meet the standards of technical excellence and creativity and to provide the opportunities in this global village.
                    <br>
                    Baselios Mathews II College of Engineering (BMCE) is named after its founder, the late H H Moran Mar Baselios Marthoma Mathews II, the sixth Catholicons of the East and the Malankara Metropolitan of Malankara Orthodox Church. He was also the first Chairman of the institution. This renowned college is managed by Dr. C T Eapen Trust under Malankara Orthodox Syrian Church. The institution started functioning in 2002 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering and Technology. Located in the picturesquely beautiful Muthupilakadu in Sasthamcotta in the Kollam district of Kerala, the college stands out for its magnificent buildings and ultra-modern Infrastructure; a fascinating blend of architectural excellence and functional values. Affiliated to the University of Kerala and later to APJ Abdul Kalam Technological University, this self-financed institute currently provides 6 AICTE-approved UG courses.
                </p>
            {/if}
        </div>
        <div bind:this={grid2} class="sbbmce-grid">
            {#if elementIntersections.get(grid2)}
                <h2>IEEE SB BMCE</h2>
                <p>
                    About IEEE SB BMCE
                    The IEEE Student Branch at Baselios Mathews II College of Engineering (BMCE) was officially formed in 2022 and became fully active in 2023. Under the dedicated guidance of our faculty advisor and the hard work of our founding members, the branch quickly established itself as a vibrant community.<br>
                    Our first-ever Executive Committee (Ex-Com) for the 2023-2025 term laid the foundation for all our future activities and initiatives. While we are a relatively new branch, our members are already actively engaged in various IEEE events and workshops, showcasing their talent and dedication.<br>
                    Currently, the branch is primarily focused on the Computer Society, providing a platform for students to delve deeper into the world of computing, software, and technology. We are committed to fostering technical knowledge, professional growth, and a strong sense of community among our members.
                </p>
                <img class="sbbmce-img" src={bmce_building} alt="BMCE">
            {/if}
        </div>
        {#if elementIntersections.get(grid3)}
            <h1 class="vis-mis-head">Our Vision & Mission</h1>
        {/if}
        <div bind:this={grid3} class="vis-mis-grid">
            {#if elementIntersections.get(grid3)}
                <div class="vis-mis-item">
                    <h1>Vision</h1>
                    <p>
                        To be a hub of innovation and technical excellence at BMCE, fostering a community of skilled and empowered student engineers ready to tackle global challenges.
                    </p>
                </div>
                <div class="vis-mis-item">
                    <h1>Mission</h1>
                    <p>
                        Our mission is to create a vibrant learning environment that:<br>
                        ● Connects students with cutting-edge technology and industry trends.<br>
                        ● Provides opportunities for hands-on projects, skill development, and professional networking.<br>
                        ● Prepares students for success in a competitive world through mentorship and peer-to-peer learning.
                    </p>
                </div>
            {/if}
        </div>
    </MultipleIntersectionObserver>
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
    width: fit-content;
    padding: 12px;
}

.about-head {
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

.bmce-grid {
    display: grid;
    column-gap: 5vh;
    margin-top: 5vh;
}

.bmce-img {
    border-radius: 12px;
    border: 1px solid #ffffff40;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 250ms;
    animation-fill-mode: forwards;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
}
.bmce-grid h2 {
    font-family: 'Open Sans';
    color: white;
    margin: 0;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
}

.bmce-grid p {
    font-family: 'Open Sans';
    color: white;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 750ms;
    animation-fill-mode: forwards;
    word-break: break-all;
    overflow: scroll;
}

.sbbmce-grid {
    display: grid;
    column-gap: 5vh;
    margin-top: 5vh;
}

.sbbmce-img {
    border-radius: 12px;
    border: 1px solid #ffffff40;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 250ms;
    animation-fill-mode: forwards;
    opacity: 0;
}
.sbbmce-grid h2 {
    font-family: 'Open Sans';
    color: white;
    margin: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    opacity: 0;
}

.sbbmce-grid p {
    font-family: 'Open Sans';
    color: white;
    grid-column: 1;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 750ms;
    animation-fill-mode: forwards;
    opacity: 0;
    word-break: break-all;
    overflow: scroll;
}
.vis-mis-head {
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
    animation-delay: 250ms;
    animation-fill-mode: forwards;
    color: white;
    align-content: center;
    padding-top: 10vh;
    opacity: 0;
}
.vis-mis-grid {
    display: grid;
    column-gap: 5vh;
    margin-top: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
}
.vis-mis-item {
    background: radial-gradient(circle at bottom right, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border: 1px solid #ffffff40;
    border-radius: 24px;
    width: 100%;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
    opacity: 0;
}


@media only screen and (orientation: landscape) {
    .about-head {
        font-size: 6vh;
        width: fit-content;
        align-content: center;
        padding: 12;
    }

    .bmce-grid {
        height: 50vh;
        column-gap: 5vh;
        margin-top: 5vh;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 20vh;
    }

    .bmce-img {
        height: 50vh;
        grid-column: 1;
        grid-row: 1 / span 2;
    }
    .bmce-grid h2 {
        grid-column: 2;
    }

    .bmce-grid p {
        grid-column: 2;
    }

    .sbbmce-grid {
        height: 50vh;
        column-gap: 5vh;
        margin-top: 5vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }

    .sbbmce-img {
        height: 50vh;
        grid-column: 2;
        grid-row: 1 / span 2;
    }
    .sbbmce-grid h2 {
        grid-column: 1;
    }

    .sbbmce-grid p {
        grid-column: 1;
    }
    .vis-mis-head {
        font-size: 6vh;
        padding: 8px;
        margin-top: 24px;
        width: fit-content;
        align-content: center;
        padding-top: 10vh;
    }
    .vis-mis-grid {
        height: 50vh;
        column-gap: 5vh;
        margin-top: 5vh;
        margin-left: 5vw;
        margin-right: 5vw;
    }
    .vis-mis-item {
        width: 100%;
        grid-row: 1;
    }

}

@media only screen and (orientation: portrait) {
    .about-head {
        font-size: 8vw; 
    }

    .bmce-grid {
        height: max-content;
        column-gap: 5vh;
        margin-top: 5vh;
        margin-bottom: 8vh;
    }

    .bmce-img {
        height: fit-content;
        width: 90vw;
        grid-column: 1;
    }
    .bmce-grid h2 {
        grid-column: 1;
        margin: 0;
        margin-top: 8px;
    }

    .bmce-grid p {
        grid-column: 1;
    }

    .sbbmce-grid {
        height: max-content;
        column-gap: 5vh;
        margin-top: 5vh;
    }

    .sbbmce-img {
        height: fit-content;
        width: 90vw;
        grid-column: 1;
        grid-row: 1;
    }
    .sbbmce-grid h2 {
        grid-column: 1;
        margin: 0;
        margin-top: 8px;
    }

    .sbbmce-grid p {
        grid-column: 1;
    }

    .vis-mis-head {
        font-size: 8vw;
        width: fit-content;
        align-content: center;
        padding-top: 10vh;
    }
    .vis-mis-grid {
        row-gap: 5vw;
        margin-top: 5vh;
        margin-left: 3vw;
        margin-right: 3vw;
    }
    .vis-mis-item {
        width: 100%;
        grid-column: 1;
    }
}

.bmce-img:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.sbbmce-img:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.vis-mis-item:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.vis-mis-item h1 {
    font-family: 'Open Sans';
    padding: 24px;
    color: white;
}

.vis-mis-item p {
    font-family: 'Open Sans';
    padding: 24px;
    color: white
}

</style>
