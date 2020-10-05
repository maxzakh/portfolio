<template>
  <div id="intro">
    <h1>
      About
    </h1>
    <p>I am the web developer for Kcrafts, an eCommerce website that sells genuine gemstone jewelry</p>
    <br>
    <p>I got into programming to make my life easier.</p>
    <br>
    <p>I started by automating formatting for Microsoft Word and Excel by writing functions using VBA</p>
    <br>
    <p>Stop wasting time formating documents, when you can be doing other tasks</p>
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