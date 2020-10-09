<template>
    <div class="home">
        <div class="steps">
            <svg
                v-for="step of steps"
                :key="step"
                class="footprint-el"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16.9 16.9"
                :style="stepStyle(step)"
            >
                <path
                    d="M5 5.4C6 4 6.8 3.8 7.8 3.6 14.8 3 16.6 6 10.3 7 9 7.2 2.6 8.7 4.9 5.4zM1.3 7.7c-.5.7-.6 1.7-.1 2 .4.2 1.6.4 1.9 0 .3-.4 1.2-1 .9-1.9-.4-1-2.4-.4-2.7 0zM8 12.7c1.6.5 2.5 0 3.4-.5 5.6-4 5.2-7.4-.4-4.1-1 .6-7 3.6-3 4.6zM3.7 13.3c-.9-.2-1.6-1-1.4-1.5.2-.4 1-1.3 1.5-1.2.5.1 1.5 0 1.9.9.3 1-1.6 1.8-2 1.8z"
                />
            </svg>
        </div>

        <div class="welcome">
            <h1>Hi, my name is Max</h1>
            <p>Full stack developer by day</p>
            <p>Student by night</p>
            <p>Check out my Portfolio to see my projects and websites I have worked on</p>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
    setup() {
        const steps = ref([0, 1, 2, 3, 4]);

        function stepStyle(step: number): string {
            let isEven = step % 2 === 0;
            let x = step * 10;
            let y = isEven ? 40 : 50;
            let delayStep = 3 / steps.value.length;
            let delay = step * delayStep;
            return `top: ${y}%; left: ${x}%; animation-delay: ${delay}s`;
        }

        return {
            steps,
            stepStyle,
        };
    },
});
</script>

<style lang="scss">
@keyframes stepping {
    0% {
        opacity: 0.2;
    }
    5% {
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

.footprint-el {
    position: absolute;
    height: 100px;
    width: 100px;
    // background-color: red;
    animation: 10s stepping infinite;

    path {
        fill: black;
        stroke: white;
        stroke-width: 0.25;
    }
}

.home {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.welcome {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 100%;
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

@keyframes moving {
    from {
        transform: translate(100%, 100%);
    }
    to {
        transform: translate(50%, 50%);
    }
}
</style>
