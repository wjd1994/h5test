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
            }
          ]
      }
        
      
]
export default routes