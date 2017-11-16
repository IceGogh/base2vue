import Vue from 'vue'
import RouterA from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(RouterA)

export default new RouterA({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
