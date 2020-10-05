<template>
  <div id="intro">
    <h1>
      About
    </h1>
    <p>I am the web developer for Kcrafts, an eCommerce website that sells genuine gemstone jewelry</p>
    <br>
    <img src="../../src/assets/kcrafts-preview.png" alt="picture of shopping page">
  </div>
</template>

<script lang='ts'>
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    setup() {
      return {};
    }
  })
</script>

<style lang="scss" scoped>
#intro {
  color: white;
  img {
    width: 50%;
    margin-left: 25%;
  }
}
</style>