<template>
  <div class="mainmenu">
    <div>
      <router-view style="padding-bottom: 4rem"></router-view>
    </div>
    <div class="footmenu">
      <router-link class="menuitem" to="/index">
        <i class="el-icon-house"></i>
        <span >首页</span>
      </router-link>
      <router-link class="menuitem" to="/index">
        <i class="el-icon-box"></i>
        <span >藏品</span>
      </router-link>
      <router-link class="menuitem" to="/index">
        <i class="el-icon-present"></i>
        <span >盲盒</span>
      </router-link>
      <router-link class="menuitem" to="/index">
        <i class="el-icon-user"></i>
        <span >我的</span>
      </router-link>
    </div>
  </div>

</template>
<script>
export default {
  name: 'MainMenu',
  data(){
    return {
     
       
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
    

  },
  components: {
    
  },
  methods:{
   

  }
}
</script>
<style scoped>
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

</style>
