<template>

    <div class="register">
         <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="注册">
            </el-page-header>
        </div>
          <div class="content" style="text-align:center;margin-top:10rem;">
            <el-input prefix-icon="el-icon-user-solid" v-model="registerinfo.phone" placeholder="请输入手机号"></el-input>
            <el-input v-model="registerinfo.pwd" style="border:none;margin-top:1rem;" type="password" prefix-icon="el-icon-unlock" show-password placeholder="请输入密码"></el-input>
            <el-input style="border:none;margin-top:1rem;" prefix-icon="el-icon-notebook-1" v-model="registerinfo.bycode" placeholder="请输入邀请码"></el-input>
            <div class="loginbtn" style="text-align:center;margin-top:1rem;">
                <el-button type="primary" style="width:100%" @click="register">注册</el-button>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: "setup",
    data() {
        return {
            registerinfo: {
                phone:"",
                pwd: "",
                bycode:""
            }
        }
    },
    methods: {
        goBack(){
            this.$router.push("/user")
        },
        register() {
            var _this = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/register",
                _this.registerinfo
            ).then(function(res){
               console.log(res.data);
               if(res.data=="success"){
                   alert("注册成功,请返回登录页面登录");
               }
               else{
                   alert(res.data);
               }
               
               
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
}
</script>

