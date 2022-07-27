import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import HomeComponent from '../pages/HomeComponent'
import index from '../pages/users/index'
import postsIndex from '../pages/posts/index'
import userTemplate from '../pages/templates/usersTemplate'
import postsTemplate from '../pages/templates/postsTemplate'
import showUser from '../pages/users/showUser'
import showPost from '../pages/posts/showPost'

const routes = [
    {path:'/',name:'home',component:HomeComponent},
    {path:'/users',name:'userTemplate',component:userTemplate,children:[
            {path:'',name:'users',component:index},
            {path:':id',name:'showUser',component:showUser}
        ]},
    {path:'/posts',name:'postsTemplate',component:postsTemplate,children:[
            {path:'',name:'postsIndex',component:postsIndex},
            {path:':id',name:'showPost',component:showPost}
        ]}
]

const router = createRouter(
    {history: createWebHistory(), routes}
)

export default router
