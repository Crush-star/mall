import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../views/home/home')
const Sort = () => import('../views/sort/sort')
const ShopCart = () => import('../views/shopCart/shopCart')
const PorFile = () => import('../views/proFile/proFile')
const Detail = () => import('@/components/content/details/detail')
//通过vue.use(插件)安装插件
Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,

  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/porfile',
    component:PorFile
  },
  {
    path:'/home/:iid',
    component:Detail
  },

]
const router = new VueRouter({
  routes,  //路由的映射
  mode:'history',
  linkActiveClass:'active'    //活跃的标签添加的class属性值
})

export default router