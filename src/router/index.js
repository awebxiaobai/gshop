import Vue from 'vue'
import VueRouter from 'vue-router'

/* import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile' */
// 路由组件懒加载
const MSite=()=>import('../pages/MSite/MSite')
const Search=()=>import('../pages/Search/Search')
const Order=()=>import('../pages/Order/Order')
const Profile=()=>import('../pages/Profile/Profile')

import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'goods',
                    component:ShopGoods
                },
                {
                    path:'ratings',
                    component:ShopRatings
                },
                {
                    path:'info',
                    component:ShopInfo
                },
                {
                    path:'',
                    redirect:'goods'
                }
            ]
        },
        // 默认显示
        {
            path: '/',
            redirect: '/msite'
        },
    ]
})