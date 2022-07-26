import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import HomeComponent from '../pages/HomeComponent'
import index from '../pages/users/index'

const routes = [
    {path:'/',name:'home',component:HomeComponent},
    {path:'/users',name:'users',component:index},
]

const router = createRouter(
    {history: createWebHistory(), routes}
)

export default router
