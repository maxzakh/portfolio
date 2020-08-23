<template>
    <div class="home">
        <!-- <img id="tracks" width="120px" height="120px" src="assets/footprints.svg"> -->

        <div class="steps"></div>

        <svg class="footprint-el" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.9 16.9">
            <path
                d="M5 5.4C6 4 6.8 3.8 7.8 3.6 14.8 3 16.6 6 10.3 7 9 7.2 2.6 8.7 4.9 5.4zM1.3 7.7c-.5.7-.6 1.7-.1 2 .4.2 1.6.4 1.9 0 .3-.4 1.2-1 .9-1.9-.4-1-2.4-.4-2.7 0zM8 12.7c1.6.5 2.5 0 3.4-.5 5.6-4 5.2-7.4-.4-4.1-1 .6-7 3.6-3 4.6zM3.7 13.3c-.9-.2-1.6-1-1.4-1.5.2-.4 1-1.3 1.5-1.2.5.1 1.5 0 1.9.9.3 1-1.6 1.8-2 1.8z"
            />
        </svg>

        <div class="welcome">
            <h1>Hi, my name is Max and I design webpages and make web apps</h1>
            <p>I like learning new tech and implementing solutions</p>
            <p>If you have an idea, let me help you bring it to life</p>
            <p>Check out my Portfolio to see my projects and websites I have worked on</p>
        </div>

        <!-- <svg class="link-a link-shape" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12,22.57L8.89,23.52L5.98,22.32L3.49,20.41L1.58,17.92L0.38,15.01L1.33,11.9L0.38,8.79L1.58,5.88L3.49,3.39L5.98,1.48L8.89,0.28L12,1.23L15.11,0.28L18.02,1.48L20.51,3.39L22.42,5.88L23.62,8.79L22.67,11.9L23.62,15.01L22.42,17.92L20.51,20.41L18.02,22.32L15.11,23.52z"
            />
            <text x="9" y="14" class="small">Home</text>
        </svg>-->
        <!-- <svg class="link-b link-shape" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12,22.57L8.89,23.52L5.98,22.32L3.49,20.41L1.58,17.92L0.38,15.01L1.33,11.9L0.38,8.79L1.58,5.88L3.49,3.39L5.98,1.48L8.89,0.28L12,1.23L15.11,0.28L18.02,1.48L20.51,3.39L22.42,5.88L23.62,8.79L22.67,11.9L23.62,15.01L22.42,17.92L20.51,20.41L18.02,22.32L15.11,23.52z"
            />
            <text x="9" y="14" class="small">Portfolio</text>
        </svg>
        <svg class="link-c link-shape" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12,22.57L8.89,23.52L5.98,22.32L3.49,20.41L1.58,17.92L0.38,15.01L1.33,11.9L0.38,8.79L1.58,5.88L3.49,3.39L5.98,1.48L8.89,0.28L12,1.23L15.11,0.28L18.02,1.48L20.51,3.39L22.42,5.88L23.62,8.79L22.67,11.9L23.62,15.01L22.42,17.92L20.51,20.41L18.02,22.32L15.11,23.52z"
            />
            <text x="9" y="14" class="small">About</text>
        </svg>-->
    </div>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
.home {
    position: relative;
    /* background: burlywood; */
}
.welcome {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.welcome h1 {
    color: white;
}
.welcome p {
    margin: 1em 0 1em 0;
}
path {
    stroke-width: 0.2;
    fill: aliceblue;
    stroke: rgb(0, 38, 255);
}
.small {
    font: italic 15% sans-serif;
    transform-origin: center center;
    transform: rotate(-10deg);
}
.link-shape {
    width: 200px;
    height: 200px;
}
.link-a {
    position: absolute;
    transform: translate(100%, 100%);
    animation: 2s moving infinite alternate;
}
.link-b {
    position: absolute;
    top: 0px;
    left: 60px;
}
.link-c {
    position: absolute;
    top: 0px;
    left: 100px;
}
.page-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 20px;
}

.footprint-el {
    height: 100px;
    width: 100px;

    path {
        fill: black;
        stroke: white;
        stroke-width: 0.25;
    }

    .a {
        transform: translate(0, 5px);
        fill: red;
    }

    .b {
        transform: translate(10px, 0);
        fill: green;
    }
}

.steps {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: red;
    height: 100%;
    width: 100%;
    background-size: 164px 164px;
    background-image: url(../assets/footprints.svg);
    background-repeat: no-repeat;
    /* background-position: 100px 300px; */
    animation: 10s steps-anim infinite;
    animation-timing-function: steps(1);
}

$x-a: 0%;
$x-step: 10%;
$y-a: 85%;
$y-b: 95%;

@keyframes steps-anim {
    0% {
        background-position: 0 0;
    }
    10% {
        background-position: $x-a+$x-step*1 $y-a;
    }
    20% {
        background-position: $x-a+$x-step*2 $y-b;
    }
    30% {
        background-position: $x-a+$x-step*3 $y-a;
    }
    40% {
        background-position: $x-a+$x-step*4 $y-b;
    }
    50% {
        background-position: $x-a+$x-step*5 $y-a;
    }

    60% {
        background-position: $x-a+$x-step*6 $y-b;
    }
    70% {
        background-position: $x-a+$x-step*7 $y-a;
    }

    80% {
        background-position: $x-a+$x-step*8 $y-b;
    }
    90% {
        background-position: $x-a+$x-step*9 $y-a;
    }
    100% {
        background-position: $x-a+$x-step*10 $y-b;
    }
}

@keyframes moving {
    from {
        transform: translate(100%, 100%);
    }
    to {
        transform: translate(50%, 50%);
    }
}
</style>
