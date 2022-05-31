<template>
<div class="userpage">
    <div class="header" >
        <div class="title">
            <span>我的</span>
        </div>
        <div class="setupicon">
            <i class="el-icon-s-tools" @click="enter_setup"></i>
        </div>
    </div>
    <div class="avatar" style="margin-top:3rem;text-align: center;">
        <el-avatar :size="50" :src="userinfo.avatarurl"></el-avatar>
    </div>
    <div class="username" style="margin-top:0rem;text-align: center;">
        <p style="font-size:1.3rem;">{{userinfo.name}}</p>
    </div>
    <div class="chaifu">
        <div class="qianbao">
            <p style="padding:0px;margin:0px;">钱包</p>
            <p style="padding:0px;margin:0px;">0.00</p>
        </div>
        <div class="jifen">
            <p style="padding:0px;margin:0px;">积分</p>
            <p style="padding:0px;margin:0px;">0</p>
        </div>
    </div>
     
</div>
</template>

<script>
export default{
    name: 'UserPage',
    data(){
        return {
            userinfo: {
                avatarurl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                name: "Jack"
            }
            
        }
    },
    created(){
        
    },
    methods: {
        enter_setup() {
            this.$router.push('/setup');
        }
    }
}
</script>

<style scopes lang="less">
.header {
    display:flex;
    justify-content:center;
    position: relative;
    margin-top:1rem;
    .setupicon {
        position: absolute;
        right:0px;
        font-size:1.2rem;
        
    }
}
.chaifu {
    display: flex;
    justify-content: space-between;
}


</style>
