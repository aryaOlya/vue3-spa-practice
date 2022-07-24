import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import HomeComponent from '../pages/HomeComponent'

const routes = [
    {path:'/',name:'home',component:HomeComponent},
]

const router = createRouter(
    {history: createWebHistory(), routes}
)

export default router
