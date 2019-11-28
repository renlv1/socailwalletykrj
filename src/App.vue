<template>
  <div id="app">
    <vheader></vheader>
    <router-view/>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vheader from './components/header'
import vfooter from './components/footer'
export default {
  name: 'App',
  components: {
    vheader,
    vfooter
  }
}
</script>

<style>
@import "assets/css/1/common.css";
#app {
  width: 100%;
  height: 100%;
}
</style>
