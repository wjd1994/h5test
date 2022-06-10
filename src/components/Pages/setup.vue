<template>
    <div class="setup">
        <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="个人信息修改">
            </el-page-header>
        </div>
        <div class="content">
            <div class="name" @click="nameFormVisible=true">
                <p>昵称</p>
                <p>{{personinfo.name}}<i class="el-icon-arrow-right" ></i></p>
            </div>
            <div class="phone">
                <p>手机号</p>
                <p>{{personinfo.phone}}</p>
                
            </div>
            <div class="shimin" @click="switch_shimin">
                <p>实名认证</p>
                <p><i class="el-icon-arrow-right"></i></p>
                
            </div>
        </div>
         <div class="submit">
            <el-button @click="sumbit_personinfo" type="primary" style="width:100%;margin-top:1rem;">保存提交</el-button>
        </div>
        <div class="unlogin">
            <el-button @click="unlogin" type="primary" style="width:100%;margin-top:1rem;">退出登录</el-button>
        </div>
         <el-dialog title="修改昵称"  width="90%" :visible.sync="nameFormVisible" :close-on-click-modal="false">
            <el-form :model="personinfo1">
                <el-form-item fixed label="输入新的昵称：" label-width="8rem">
                    <el-input v-model="personinfo1.name" autocomplete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel_mod">取 消</el-button>
                <el-button type="primary" @click="submit_mod">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>


export default {
    name: "setup",
    data() {
        return {
            is_mod_flag:false,
            personinfo: {
                name: '',
                phone: '',
            },
            personinfo1: {
                name: '',
                phone: '',
            },
            nameFormVisible: false,
        }
    },
    created() {
        this.get_userinfo();
    },
    methods: {
        get_userinfo() {
            var _this = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/getuserinfo_basic",
                {"phone":_this.$store.state.login_id}
            ).then(function(res){
               console.log(res.data);
               _this.personinfo = res.data;
               _this.personinfo['pwd'] = _this.$store.state.login_pwd;
               _this.personinfo1 = _this.personinfo;
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack() {      
            this.$router.push("/user")
        },
        cancel_mod() {
            this.nameFormVisible = false;
            this.personinfo1 = this.personinfo;
        },
        submit_mod() {
            this.is_mod_flag = true;
            this.nameFormVisible = false;
            this.personinfo = this.personinfo1;
        },
        switch_shimin() {
            this.$router.push("/shimin");
        },
        sumbit_personinfo() {
            var vm = this;
            this.is_mod_flag = false;
            this.$axios.post(this.GLOBAL.serverSrc+"/saveuserinfobasic",
                this.personinfo
            ).then(function(res){
               console.log(res.data);
               if(res.data=='success'){
                   vm.$message({
                        message: "保存成功",
                        type: 'success'
                    });
               }

            }).catch((err)=>{
                console.log(err)
            })
        },
        unlogin() {
            this.$store.commit('set_loginid',null)
            this.$store.commit('set_loginpwd', null)
            this.$router.push('/user');
            localStorage.clear();
        }
    }
}
</script>
<style scoped>
.content {
    margin-top:4rem;
}
.content div {
    display:flex;
    justify-content: space-between;
    border-bottom: 2px solid aliceblue;
}
</style>
