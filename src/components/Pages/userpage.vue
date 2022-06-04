<template>
<div class="user" >
    <div class="userpage" v-if="is_login==true">
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
        <div class="chaifu" style="display:flex;justify-content:space-between;">
            <div @click="enter_order" class="order" style="font-size:1.5rem;color:cornflowerblue;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <i class="el-icon-shopping-cart-full"></i>
                <span style="font-size:0.7rem">我的订单</span>
            </div>
            <div @click="enter_zhichan" class="zhichan" style="font-size:1.5rem;color:orange;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <i class="el-icon-receiving"></i>
                <span style="font-size:0.7rem">我的资产</span>
            </div>
            <div @click="enter_mychangpin" class="changpin" style="font-size:1.5rem;color:orangered;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <i class="el-icon-box"></i>
                <span style="font-size:0.7rem">我的藏品</span>
            </div>
            <div class="manghe" style="font-size:1.5rem;color:purple;display:flex;flex-direction: column;justify-content: center;align-items: center;">
                <i class="el-icon-present"></i>
                <span style="font-size:0.7rem">我的盲盒</span>
            </div>
        </div>
        <div class="itemul" style="margin-top:1.5rem;">
            <div class="about" @click="aboutVisible=true;" style="margin-bottom:0.5rem;border:1px solid gray;background-color:gray;height:2.5rem;line-height: 2.5rem;width:100%;position:relative">
                <i class="el-icon-warning-outline" style="position:absolute;left:1rem;top:0.7rem;">关于</i>
                <i class="el-icon-arrow-right" style="position:absolute;right:0.2rem;top:0.7rem;"></i>
            </div>
            <div class="kefu" @click="kefuVisible=true" style="border:1px solid gray;background-color:gray;height:2.5rem;line-height: 2.5rem;width:100%;position:relative">
                <i class="el-icon-service" style="position:absolute;left:1rem;top:0.7rem;">我的客服</i>
                <i class="el-icon-arrow-right" style="position:absolute;right:0.2rem;top:0.7rem;"></i>
            </div>
        </div>
        <el-dialog title="关于"  width="90%" :visible.sync="aboutVisible" :close-on-click-modal="false">
                <div class="info" >
                    <p>数字藏品交易系统</p>
                    <p>版本信息：1.0</p>
                    <p>交流QQ群：123456789</p>
                </div>

                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="aboutVisible=false">确 定</el-button>
                </div>
        </el-dialog> 
        <el-dialog title="我的客服"  width="90%" :visible.sync="kefuVisible" :close-on-click-modal="false">
                <div class="info" >
                    <p>添加下面客服QQ</p>
                    <p>QQ号：98989898</p>
                </div>

                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="kefuVisible=false">确 定</el-button>
                </div>
        </el-dialog> 
    </div>
    <div class="notloginuserpage" v-else>
        <div class="username" style="margin-top:10rem;display:flex;flex-direction:row;justify-content: center;">
            <p style="width:4rem">用户名:</p>
            <el-input placeholder="请输入手机号" v-model="login_info.name" style="width:15rem;margin-left:1rem;"></el-input>
        </div>
        <div class="psw" style="margin-top:1rem;display:flex;flex-direction:row;justify-content: center;">
            <p style="width:4rem">密码:</p>
            <el-input placeholder="请输入密码" v-model="login_info.psw" style="width:15rem;margin-left:1rem;"></el-input>
        </div>
        <div class="loginbtn" style="text-align:center;margin-top:1rem;">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary" @click="register">注册</el-button>
        </div>
        <div class="rember" style="position:relative">
            <p style="font-size:0.5rem;color:blue;position:absolute;right:0px;">忘记密码</p>
        </div>
        
    </div>


</div>
</template>

<script>
export default{
    name: 'UserPage',
    data(){
        return {
            is_login:false,
            login_info:{
                name: '',
                psw: ''
            },
            userinfo: {
                avatarurl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                name: "Jack"
            },
            aboutVisible: false,
            kefuVisible:false,
            
        }
    },
    created() {
        if(this.$store.state.login_id=='0') {
            this.is_login = false
        }
        else {
            this.is_login = true
        }
    },
    updated(){
        
    },
    methods: {
        enter_setup() {
            this.$router.push('/setup');
        },
        enter_order() {
            this.$router.push('/order');
        },
        enter_zhichan() {
            this.$router.push('/zhichan')
        },
        enter_mychangpin() {
            this.$router.push('/mychangpin')
        },
        login() {
            this.$store.commit('set_loginid',this.login_info.name)

            this.is_login = true;
        },
        register() {

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
