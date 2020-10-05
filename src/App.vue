<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/portfolio">Portfolio</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
        <footer class="page-footer">
            <p>Find me on</p>
            <div class="social-media">
                <a href="https://github.com/maxzakh" target="_blank">
                    <img src="./assets/github_icon.svg" alt="GitHub" />
                </a>
                <a href="https://twitter.com/maxamoose9">
                    <img src="./assets/twitter_icon.svg" alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/max-zakharzhevskiy-08097050/" target="_blank">
                    <img src="./assets/linkedin_icon.svg" alt="LinkedIn" />
                </a>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    // background: linear-gradient(to top right, #4070BF, #48194D);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1011%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1012)'%3e%3c/rect%3e%3cpath d='M1446.41 192.98C1256.94 196.89 1097.13 452.01 733.5 450.58 369.87 449.15 242.93-64.49 20.59-94.51' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1517.22 216.01C1409.84 215.77 1305.34 146.01 1093.45 146.01 881.57 146.01 885.34 216.72 669.68 216.01 454.02 215.3 366.31-7.35 245.91-14.66' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1590.88 279.32C1468.12 280.98 1372 430.51 1121.86 424.92 871.72 419.33 817.79-26.86 652.84-69.53' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1560.26 400.84C1434.58 391.36 1371.77 157.18 1126.89 143.24 882.02 129.3 812.97-53.98 693.53-58.87' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1511.78 277.91C1378.32 280.56 1211.23 462.28 1008.79 457.11 806.35 451.94 869.83 56.13 757.29-16.86' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1011'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1012'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='%2300459e' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: cover;
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
    background-color: #444586;

    a {
        padding: 0.5em;
        color: white;
        text-decoration: none;
    }
}

.page-footer {
    background-color: #444789;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin-top: 1em;

    p {
        padding-right: 1em;
    }

    .social-media {
        width: 20%;

        a {
            padding-right: 1em;
        }
    }
}
</style>
