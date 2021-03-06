import MainMenu from '../components/Menu/MainMenu.vue'
import HomePage from '../components/Pages/home.vue'


const routes=[
    {
      path:'/home',
      name:'/home',
      component: HomePage
    },
    {
        path: '/',
        component: MainMenu,
        children: [
            {
              path: 'index',
              name: 'index',
              meta:{title: '首页',index:0},
              component: ()=>import('../components/Pages/index.vue')
            },
            {
              path: 'changpin',
              name: 'changpin',
              meta:{title: '藏品',index:0},
              component: ()=>import('../components/Pages/changpin.vue')
            },
            {
              path: 'manghe',
              name: 'manghe',
              meta:{title: '盲盒',index:0},
              component: ()=>import('../components/Pages/manghe.vue')
            },
            {
              path: 'user',
              name: 'user',
              meta:{title: '我的',index:0},
              component: ()=>import('../components/Pages/userpage.vue')
            },
            {
              path: 'changpindetail',
              name: 'changpindetail',
              meta:{title: '藏品详情',index:0},
              component: ()=>import('../components/Pages/changpindetail.vue')
            },
            {
              path: 'setup',
              name: 'setup',
              meta:{title: '个人信息修改',index:0},
              component: ()=>import('../components/Pages/setup.vue')
            },
            {
              path: 'shimin',
              name: 'shimin',
              meta:{title: '实名认证',index:0},
              component: ()=>import('../components/Pages/shimin.vue')
            },
            {
              path: 'order',
              name: 'order',
              meta:{title: '订单',index:0},
              component: ()=>import('../components/Pages/order.vue')
            },
            {
              path: 'zhichan',
              name: 'zhichan',
              meta:{title: '资产',index:0},
              component: ()=>import('../components/Pages/zhichan.vue')
            },
            {
              path: 'mychangpin',
              name: 'mychangpin',
              meta:{title: '我的藏品',index:0},
              component: ()=>import('../components/Pages/mychangpin.vue')
            },
            {
              path: 'mymanghe',
              name: 'mymanghe',
              meta:{title: '我的盲盒',index:0},
              component: ()=>import('../components/Pages/mymanghe.vue')
            },
            {
              path: 'register',
              name: 'register',
              meta:{title: '注册',index:0},
              component: ()=>import('../components/Pages/register.vue')
            },
            {
              path: 'moneyrecord',
              name: 'moneyrecord',
              meta:{title: '交易明细',index:0},
              component: ()=>import('../components/Pages/moneyrecord.vue')
            },
          ]
      }
        
      
]
export default routes