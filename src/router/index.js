import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WordList from '@/components/WordList'
import Word from '@/components/Word'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/words',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/words/word/:id',
      name: 'Word',
      component: Word
    }
  ]
})
