import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import landing from '@/components/landing'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: landing
    }
  ]
})
