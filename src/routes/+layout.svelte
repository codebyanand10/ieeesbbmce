<script>


let { children } = $props();
import black_logo from "$lib/assets/ieeesbbmce-logo.svg"
import ieee_logo from "$lib/assets/IEEE-logo.svg"
import sep_icon from "$lib/assets/sep.svg"
import ham_icon from "$lib/assets/ham.svg"
import fav_icon from "$lib/assets/favicon.svg"

import { onMount, onDestroy } from 'svelte';
import * as THREE from 'three';

let vantaElement;
let vantaEffect;

onMount(async () => {
    const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;

    vantaEffect = BIRDS({
        el: vantaElement,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0x01267f,
        color2: 0x01597f,
        wingSpan: 10.00,
        quantity: 3.00
    });
});

onDestroy(() => {
    if (vantaEffect) vantaEffect.destroy();
});

let navbar_open = $state(false);

function open_nav() {
    navbar_open = !navbar_open;
    console.log("ADADAD:" + navbar_open);
}

</script>

<svelte:head>
    <link rel="icon" type="image/svg" href={fav_icon} />
</svelte:head>

<div bind:this={vantaElement} class="gl-canvas">
</div>

<div class="menu-div" role="navigation">
    <nav class="menu">
        <img class="black-logo" src={ieee_logo} alt="IEEE Logo">
        <img class="black-logo" src={sep_icon} alt="Black Logo">
        <img class="black-logo" src={black_logo} alt="Black Logo">
        <button class="ham-button" onclick={open_nav}>
            <img class="black-logo" src={ham_icon} alt="HAM">
        </button>
        <li class="menu-item"><a href="/contact">Contact Us</a></li>
        <li class="menu-item"><a href="/execom">Execom</a></li>
        <li class="menu-item"><a href="/about">About</a></li>
        <li class="menu-item"><a href="/events">Events</a></li>
        <li class="menu-item"><a href="/">Home</a></li>
        {#if navbar_open}
            <li class="menu-panel-item" style="animation-delay: 100ms;"><a href="/" onclick={open_nav}>Home</a></li>
            <li class="menu-panel-item" style="animation-delay: 150ms;"><a href="/events" onclick={open_nav}>Events</a></li>
            <li class="menu-panel-item" style="animation-delay: 200ms;"><a href="/about" onclick={open_nav}>About</a></li>
            <li class="menu-panel-item" style="animation-delay: 250ms;"><a href="/execom" onclick={open_nav}>Execom</a></li>
            <li class="menu-panel-item" style="animation-delay: 300ms;"><a href="/contact" onclick={open_nav}>Contact Us</a></li>
        {/if}
    </nav>
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

@keyframes expand-in-normal {
    0% {
        max-height: 0px;
    }
    100% {
        max-height: 500px;
    }
}

@keyframes gradient {
    0% { background-size: 100% 100%; }
    50% { background-size: 140% 140%; }
    100% { background-size: 100% 100%; }
}


:global(body) {
    background: black;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-attachment: fixed;
    align-content: center;
    width: auto;
    height: max-content;
    margin-bottom: 24px;
}

.gl-canvas {
    width: 100%;
    height: 100%;
    z-index: -3;
    position: fixed;
    top:0;
    left: 0;
    scale: 100%;
    display: flex;
    align-content: center;
    animation: fade-in-normal 5s ease 1;
}


.black-logo {
    align-content: center;
    max-height: 30px;
    padding: 8px;
    margin-top: 4px;
    filter: grayscale(100%) opacity(0.85);
    transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
}

.black-logo:hover {
    filter: grayscale(0%) opacity(1);
    transform: scale(1.06);
}

.ham-button {
    background: none;
    border: none;
    float: right;
}

.menu {
    background-color: #0000ff10;
    border-radius: 32px;
    border: 1px solid #ffffff30;
    padding: 4px;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: 12px;
    margin-right: 12px;
    align-items: center;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 20px #101010;
    transition: box-shadow 200ms linear, border 100ms linear;
}

.menu-div {
    position: sticky;
    top: 8px;
    margin-top: 8px;
    animation: rev-translate-in-normal 1s ease 1;
    z-index: 2;
}

.menu-item a {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
    font-family: 'Open Sans';
    text-decoration: none;
    
}
.menu-panel-item {
    padding: 12px;
    background-color: transparent;
    text-shadow: 0px 0px 0px #0156af;
    justify-content: space-between;
    max-height: 0;
    opacity: 0;
    width: fit-content;
    animation: expand-in-normal 2s ease 1, rev-translate-in-normal 1s ease 1, fade-in-normal 1s ease 1;
    animation-fill-mode: forwards;
    list-style-type: none;
}
.menu-panel-item a {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
    font-family: 'Open Sans';
    text-decoration: none;
}
.menu-panel {
    width: 90%;
    padding: 12px;
    background-color: transparent;
    text-shadow: 0px 0px 0px #0156af;
    align-self: center;
}
.menu-item {
    display: inline;
    float: right;
    padding: 12px;
    background-color: transparent;
    text-shadow: 0px 0px 0px #0156af;
}

@media only screen and (orientation: landscape) {
    .menu-panel-item {
        display: none;
    }
    .menu-item {
        display: inline;
    }
    .ham-button {
        display: none;
    }
}

@media only screen and (orientation: portrait) {
    .menu-panel-item {
        display: list-item;
    }
    .menu-item {
        display: none;

    }
}



.menu:hover {
    box-shadow: 0px 0px 10px #01267f;
    border: 1px solid #01267f;
}

.menu-item:hover a {
    color: #0156af;
    -webkit-transition: color 80ms linear; 
    transition: color 100ms linear, text-shadow 100ms linear, scale 100ms linear;
    text-shadow: 0px 0px 10px #0156af;
}

.menu-panel-item:hover a {
    color: #0156af;
    -webkit-transition: color 80ms linear; 
    transition: color 100ms linear, text-shadow 100ms linear;
    text-shadow: 0px 0px 10px #0156af;    
}

</style>

{@render children()}
