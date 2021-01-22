import {createRouter, createWebHistory} from 'vue-router'
import Tasks from './views/Tasks'
import Task from './views/Task'
import New from './views/New'

export default createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/week3/', component: Tasks},
    { path: '/week3/new', component: New },
    { path: '/week3/task/:taskId?', component: Task },
    { path: '/:notFound(.*)', redirect: '/week3/' }
  ],
  
  linkActiveClass: 'active',
})