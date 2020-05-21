<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  display: grid;
  grid-template-rows: 100px 1fr;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
