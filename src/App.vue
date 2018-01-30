<template>
 <div id="app">
<!--       <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg" class="parallax"> -->
      <router-view name="header"> </router-view>
      <router-view default/>
      <router-view name="footer"/>
      <!-- </v-parallax> -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
    background: inherit;
    color: #fff;
    /*padding: 2%;*/
    /*font-family: 'Open Sans', sans-serif;*/

}
body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;

	/*background: url('/static/bg.jpg');*/
}
/*.parallax{
	min-height: 100vh;
}*/
</style>
