import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'

import index from '@/components/index.vue'
import indexCont from '@/components/index-content.vue'
import viewGame from '@/components/view-game.vue'
import sale from '@/components/sale.vue'
import onsale from '@/components/onsale.vue'
import originAccess from '@/components/origin-access.vue'
import notFound from '@/components/404.vue'
import reg  from '@/components/reg.vue'
import login  from '@/components/login.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {path:'',component:index},
    // {path:'',redirect:'indexContent',component:index},
    {path:'/index', component:index,redirect:'indexContent',children:[
      {path:'/indexContent', component:indexCont},
      {path:'/view-game', component:viewGame},
      {path:'/sale', component:sale},
      {path:'/onsale', component:onsale},
      { path: '/originAccess', alias: '/oA', component: originAccess },
      {path:'/reg',component:reg},
      {path:'/login',component:login},
    ]},
    
    {path:'*',component:notFound}
  ]
})
