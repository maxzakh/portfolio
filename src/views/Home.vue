<template>
    <div class="home">
        <img id="tracks" width="120px" height="120px" src="../assets/moose-tracks.svg">

        <svg class="link-a link-shape" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12,22.57L8.89,23.52L5.98,22.32L3.49,20.41L1.58,17.92L0.38,15.01L1.33,11.9L0.38,8.79L1.58,5.88L3.49,3.39L5.98,1.48L8.89,0.28L12,1.23L15.11,0.28L18.02,1.48L20.51,3.39L22.42,5.88L23.62,8.79L22.67,11.9L23.62,15.01L22.42,17.92L20.51,20.41L18.02,22.32L15.11,23.52z"
            />
            <text x="9" y="14" class="small">Home</text>
        </svg>
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
    }
});
</script>

<style>
.home {
    position: relative;
    /* background: burlywood; */
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
