import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Landing from '@/components/Landing'
import Gritify from '@/components/Gritify'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
      	default:Landing
      }
  },{
  	path:'/grid',
  	name:'grid',
  	component:Gritify
  }
  ]
})
