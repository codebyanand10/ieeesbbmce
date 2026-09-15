<script>


</script>

<div class="main">
    <h1 class="contact-head">Contact Us</h1>
    <div class="contact-grid">
        <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2360355484693!2d76.64193477496325!3d9.042221088781966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060f577c89be5d%3A0x35569068c93e9f50!2sBaselios%20Mathews%20II%20College%20of%20Engineering%2C%20Kerala!5e0!3m2!1sen!2sin!4v1754808610405!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
        <div class="contact-details">
            <p>
                <b>Address</b><br>
                <br>
                IEEE Student Branch<br>
                Baselios Mathews II College of Engineering<br>
                Lake View, Muthupilakadu<br>
                Sasthamcotta, Kollam<br>
                Kerala, India - 690 520<br>
                <br>
                <b>email:</b> <a href="mailto:ieeesbbmce@gmail.com">ieeesbbmce@gmail.com</a><br>
                <br>
                <b>Instagram:</b> <a href="https://www.instagram.com/ieeesbbmce"> @ieeesbbmce</a>
            </p>
        </div>
    </div>
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

.contact-head {
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
    padding: 12px;
}

.contact-grid {
    display: grid;
    column-gap: 5vh;
    margin-top: 5vh;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-bottom: 20vh;
}

.contact-map {
    height: 50vh;
    width: 40vw;
    border-radius: 24px;
    border: 1px solid #ffffff40;
    background-color: #90daee;
    grid-column: 1;
    grid-row: 1;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 250ms;
    animation-fill-mode: forwards;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
}
.contact-details {
    background: radial-gradient(circle at bottom right, #01165f55 35%, #01267f55 45%, #00000055 75%);
    border-radius: 24px;
    border: 1px solid #ffffff40;
    width: 40vw;
    grid-column: 2;
    opacity: 0;
    animation: fade-translate-in-normal 1s ease 1;
    animation-delay: 250ms;
    animation-fill-mode: forwards;
    transition: box-shadow 200ms linear, border 100ms linear;
    box-shadow: 0px 0px 0px #01267f;
}

@media only screen and (orientation: landscape) {
    .contact-head {
        font-size: 6vh;
        width: fit-content;
    }

    .contact-grid {
        height: 50vh;
        column-gap: 5vh;
        margin-top: 5vh;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 20vh;
    }

    .contact-map {
        height: 50vh;
        width: 40vw;
        grid-column: 1;
        grid-row: 1;
    }
    .contact-details {
        width: 40vw;
        grid-column: 2;
    }
}
@media only screen and (orientation: portrait) {
    .contact-head {
        font-size: 8vw;
        width: fit-content;
    }

    .contact-grid {
        height: 50vh;
        row-gap: 5vw;
        margin-top: 5vh;
        margin-left: 5vw;
        margin-right: 5vw;
        margin-bottom: 20vh;
    }

    .contact-map {
        height: 50vh;
        width: 95%;
        grid-column: 1;
        grid-row: 1;
    }

    .contact-details {
        width: 95%;
        grid-column: 1;
    }
}


.contact-map:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.contact-details:hover {
    box-shadow: 0px 12px 40px #01267f;
    border: 1px solid #01267f;
}

.contact-details p {
    font-family: 'Open Sans';
    padding: 24px;
    color: white
}

.contact-details p a {
    font-family: 'Open Sans';
    color: white;
}

</style>
