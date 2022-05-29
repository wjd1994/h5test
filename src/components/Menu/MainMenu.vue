<template>
  <div class="mainmenu">
    <div style="width:100%;">
      <div style="width:90%;margin-left:5%;">
        <router-view style="padding-bottom: 4rem" ></router-view>
      </div>
    </div>
    <div class="footmenu">
      <span v-for="(menu,i) in menuitem" @click="select_menu(i)" :key="i" :class="{'menuitemactive':menu.isactive,'menuitem':!menu.isactive}">
        <i :class="menu.icon"></i>
        <span >{{menu.name}}</span>
      </span>
    </div>
  </div>

</template>
<script>
export default {
  name: 'MainMenu',
  data(){
    return {
      menuitem:[
        {
          isactive: true,
          name: '首页',
          icon: 'el-icon-house',
          path: '/index'
        },
        {
          isactive: false,
          name: '藏品',
          icon: 'el-icon-box',
          path: '/changpin'
        },
        {
          isactive: false,
          name: '盲盒',
          icon: 'el-icon-present',
          path: '/manghe'
        },
        {
          isactive: false,
          name: '我的',
          icon: 'el-icon-user',
          path: '/user'
        }
      ],
       isactive:false
    }
  },
  props:[],
  beforeCreate(){
    
  },
  created(){
    
  

  },
  mounted(){
   
  },
  updated(){
    
  },
  

  watch:{
     $route(to){
       if(to.path=='/index'){
         var index = 0;
         for(var i=0;i<this.menuitem.length;i++){
            this.menuitem[i].isactive = false;
          }
          this.menuitem[index].isactive = true;
       }
       else if(to.path=='/changpin'){
         var index = 1;
         for(var i=0;i<this.menuitem.length;i++){
            this.menuitem[i].isactive = false;
          }
          this.menuitem[index].isactive = true;
       }
       else if(to.path=='/manghe'){
         var index = 2;
         for(var i=0;i<this.menuitem.length;i++){
            this.menuitem[i].isactive = false;
          }
          this.menuitem[index].isactive = true;
       }
       else if(to.path=='/user'){
         var index = 3;
         for(var i=0;i<this.menuitem.length;i++){
            this.menuitem[i].isactive = false;
          }
          this.menuitem[index].isactive = true;
       }
       else {
         for(var i=0;i<this.menuitem.length;i++){
            this.menuitem[i].isactive = false;
          }
       }
     }

  },
  components: {
    
  },
  methods:{
   select_menu(index){
     
    //  for(var i=0;i<this.menuitem.length;i++){
    //    this.menuitem[i].isactive = false;
    //  }
    //  this.menuitem[index].isactive = true;
     this.$router.push(this.menuitem[index].path);
   }

  }
}
</script>
<style scoped lang="less">
.footmenu{
  position: fixed;
  bottom:0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width:100%;
  height:2.6rem;
  background-color: white;
}
.menuitem{
  width:25%;
  height:2.6rem;
  text-align: center;
  text-decoration: none;
  
  
  /* line-height:2.5rem; */
  display: flex;
  flex-direction: column;
}
.menuitem i {
  padding:0px;
  margin:0px;
  font-size:1.2rem;
  color:black;
}
.menuitem span{
  padding:0px;
  margin:0px;
  font-size:0.8rem;
  color:black;
}
.menuitemactive {
  width:25%;
  height:2.6rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  span {
    padding:0px;
    margin:0px;
    font-size:0.8rem;
    color:skyblue;
  }
  i {
    padding:0px;
    margin:0px;
    font-size:1.2rem;
    color:skyblue;
  }
}

</style>
