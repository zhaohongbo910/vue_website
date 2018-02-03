import Footer from '@/views/footBar'
import Header from '@/views/headBar'
import Navigation from '@/views/navBar'
import Index from '@/views/Index'

import Login from "@/components/user/login"
import Register from "@/components/user/register"
export default  [
   {
      path: '/login',
      name: 'login',
      components: {
        navigation: Navigation,
        header: Header,
        footer: Footer,
        mainPage: Login,
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: Register,
        footer: Footer
      }
    },
 ]
