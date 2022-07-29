import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import HomeComponent from '../pages/HomeComponent'
import index from '../pages/users/Indexusers'
import postsIndex from '../pages/posts/IndexPost'
import userTemplate from '../pages/templates/UserTemplate'
import postsTemplate from '../pages/templates/PostsTemplate'
import showUser from '../pages/users/ShowUser'
import showPost from '../pages/posts/ShowPost'
import createPost from '../pages/posts/CreatePost'
import updatePost from '../pages/posts/UpdatePost'

const routes = [
    {path:'/',name:'home',component:HomeComponent},
    {path:'/users',name:'userTemplate',component:userTemplate,children:[
            {path:'',name:'users',component:index},
            {path:':id',name:'showUser',component:showUser}
        ]},
    {path:'/posts',name:'postsTemplate',component:postsTemplate,children:[
            {path:'',name:'postsIndex',component:postsIndex},
            {path:':id',name:'showPost',component:showPost},
            {path:'create',name:'createPost',component:createPost},
            {path:'update/:id',name:'updatePost',component:updatePost},

        ]}
]

const router = createRouter(
    {history: createWebHistory(), routes}
)

export default router
