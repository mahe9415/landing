<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:300i,400,600|Open+Sans:400,600');
#app {
    background: inherit;
    color: #fff;
}
body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}
</style>
