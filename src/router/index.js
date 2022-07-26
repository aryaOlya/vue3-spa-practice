import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import HomeComponent from '../pages/HomeComponent'
import index from '../pages/users/index'
import userTemplate from '../pages/templates/usersTemplate'
import showUser from '../pages/users/showUser'

const routes = [
    {path:'/',name:'home',component:HomeComponent},
    {path:'/users',name:'userTemplate',component:userTemplate,children:[
            {path:'',name:'users',component:index},
            {path:':id',name:'showUser',component:showUser}
        ]}
]

const router = createRouter(
    {history: createWebHistory(), routes}
)

export default router
