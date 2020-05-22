<template>
    <div class="portfolio">
        <div class="page-title">Portfolio</div>
        <div class="projects">
            <div class="project" v-for="(project, index) of projects" :key="index">
                <div class="project_title">{{project.title}}</div>
                <div class="project_preview">
                    <img v-if="project.preview" :src="project.preview" alt="Project preview" />
                </div>
                <div class="project_description">{{project.description}}</div>
                <div class="project_demo">
                    Demo:
                    <a :href="project.demo" target="_blank">Github</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "@vue/composition-api";

type Project = {
    title: string;
    description: string;
    preview?: string; // url
    demo?: string; // url
};

const projectsArray: Project[] = [
    {
        title: "Mobile Web App",
        description:
            "Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've created the HTML and CSS templates.",
        demo: "https://www.github.com/maxzakh"
    },
    {
        title: "My-Flix Application",
        description:
            "Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've created the HTML and CSS templates.",
        preview:
            "https://raw.githubusercontent.com/maxzakh/myFlix/master/client/src/assets/preview.png",
        demo: "https://movies-my-flix-server.herokuapp.com/client/"
    },
    {
        title: "Mobile Web App",
        description:
            "Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've created the HTML and CSS templates.",
        demo: "https://www.github.com/maxzakh"
    }
];

export default defineComponent({
    setup() {
        const projects = ref(projectsArray);
        return {
            projects
        };
    }
});
</script>

<style lang="scss" scoped>
.portfolio {
    display: grid;
    grid-template: 
        "title empty"
        "empty2 profiles"
    ;
    color: white;
}

.page-title {
    font-size: calc(5vw);
    font-weight: 900;
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #8a8a8a;
}

.projects {
    grid-area: profiles;
    justify-self: start;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1em;
    margin-top: 2em;
    padding-right: 10%;
}

.project {
    display: grid;
    grid-template-rows: 2em auto 1fr 2em;
    gap: 1em;
    box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.2);
    border: 1px solid cornflowerblue;
    padding: 1em;
    background: white;
    // background: grey;
}

.project_title {
    display: flex;
    align-items: center;
    margin: -0.8em;
    padding-left: 0.8em;
    font-size: 1.3em;
    background-color: cornflowerblue;
}
.project_description {
    margin-top: 0em;
    font-size: 0.9em;
    color: #4e4e4e;
}
.project_preview {
    img {
        width: 100%;
        height: 100%;
        padding-top: 1em;
    }
}
.project_demo {
    font-size: 0.9em;
    a {
        text-decoration: none;
        color: cornflowerblue;
    }
    color: #4e4e4e;
}
</style>