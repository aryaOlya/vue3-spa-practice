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
    {path:'/',name:'home',component:HomeComponent,meta:{title:'home'}},
    {path:'/users',name:'userTemplate',component:userTemplate,children:[
            {path:'',name:'users',component:index,meta:{title:'users'}},
            {path:':id',name:'showUser',component:showUser,meta:{title:'show user'}}
        ]},
    {path:'/posts',name:'postsTemplate',component:postsTemplate,children:[
            {path:'',name:'postsIndex',component:postsIndex,meta:{title:'posts'}},
            {path:':id',name:'showPost',component:showPost,meta:{title:'show post'}},
            {path:'create',name:'createPost',component:createPost,meta:{title:'create post'}},
            {path:'update/:id',name:'updatePost',component:updatePost,meta:{title:'update post'}},

        ]}
]

const router = createRouter(
    {history: createWebHistory(), routes}
)

router.beforeEach((to,from,next)=>{
    document.title = `${to.meta.title}`
    next()
})


export default router
