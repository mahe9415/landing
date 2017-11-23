<template>
  <div class="hello">
   <p class="text-xs-center">{{welcomeTxt}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from '../axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  axios.get('https://apistaging.vookmark.co/video/45dc4855c6').then((data)=>{
    
    console.log(data);
  })
  },
  computed:
    mapState({
        welcomeTxt: state => state.welcome
    })
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
