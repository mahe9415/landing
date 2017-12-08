<template>
 <div id="app">
    <v-app>
<!--       <v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg" class="parallax"> -->
      <router-view name="header"> </router-view>
      <router-view name="content"> </router-view>
      <router-view />
      </v-parallax>
      </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
 
}
.parallax{
	min-height: 100vh;
}
</style>
