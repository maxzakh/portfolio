<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
html {
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzI4MjgyOCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzIiBjeT0iNC4zIiByPSIxLjgiIGZpbGw9IiMzOTM5MzkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMS44IiBmaWxsPSJibGFjayI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMi41IiByPSIxLjgiIGZpbGw9IiMzOTM5MzkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIxMC41IiBjeT0iMTEuMyIgcj0iMS44IiBmaWxsPSJibGFjayI+PC9jaXJjbGU+Cjwvc3ZnPg==");
}

#app {
    display: grid;
    grid-template-rows: 60px 1fr;
    min-height: 100vh;
    // font-family: Avenir, Helvetica, Arial, sans-serif;
}

#nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.4em;
    // background-color: blueviolet;

    a {
        padding: 0.5em;
        color: white;
        text-decoration: none;
    }
}
</style>
