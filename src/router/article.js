
import Footer from '@/views/footBar'
import Header from '@/views/headBar'
import Navigation from '@/views/navBar'
import Index from '@/views/Index'
import Article from'@/components/article/article'

export default  [
   {
      path: '/article',
      name: 'Article',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: Article,
        footer: Footer
      }
    },
 ]