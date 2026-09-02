import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import PostDetail from './pages/PostDetail.vue'
import Projects from './pages/Projects.vue'
import ProjectDetail from './pages/ProjectDetail.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/blog/:id', component: PostDetail },
    { path: '/projects', component: Projects },
    { path: '/projects/:id', component: ProjectDetail },
  ]
})