<template>
 <div id="app">
    <v-app>
      <router-view name="header"> </router-view>
      <router-view name="content"> </router-view>
      <router-view />
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
</style>
