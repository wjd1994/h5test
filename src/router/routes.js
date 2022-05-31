import MainMenu from '../components/Menu/MainMenu.vue'

const routes=[
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
          ]
      }
        
      
]
export default routes