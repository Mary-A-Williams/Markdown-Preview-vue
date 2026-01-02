import { createRouter, createWebHistory } from 'vue-router';
import Editor from '../pages/Editor.vue';
import ErrorTest from '../pages/ErrorTest.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/error',
      name: 'ErrorTest',
      component: ErrorTest
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});


export default router;
