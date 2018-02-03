import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/views/footBar'
import Header from '@/views/headBar'
import Navigation from '@/views/navBar'
import Index from '@/views/Index'



import List from "@/components/list"

import user from "./user"
import article from "./article"




Vue.use(Router)

var  url= [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: Index,
        footer: Footer
        
      },
      children:[
        {
          path: '/',
          components: {
              index_child:List
          }
        }
      ]
    },  
]

var   urls = [...url,...user]

export default new Router({
  mode:'history',
  routes: urls
})



