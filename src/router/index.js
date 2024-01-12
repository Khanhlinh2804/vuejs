import { createRouter, createWebHistory } from "vue-router";
import user from "./user.js";


const routes = [...user];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title || 'Black Firday';
    next();
});
export default router;