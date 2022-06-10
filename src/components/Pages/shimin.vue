<template>
    <div class="setup">
        <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="实名认证">
            </el-page-header>
        </div>
        <div class="content">
            <div class="name" @click="shiminFormVisible=true">
                <p>真实姓名</p>
                <p>{{personinfo.realname}}<i class="el-icon-arrow-right" ></i></p>
            </div>
             <div class="idnum" @click="shiminFormVisible=true">
                <p>身份证号</p>
                <p>{{personinfo.idnum}}<i class="el-icon-arrow-right" ></i></p>
            </div>
             <div class="cardnum" @click="shiminFormVisible=true">
                <p>银行卡号</p>
                <p>{{personinfo.cardnum}}<i class="el-icon-arrow-right" ></i></p>
            </div>    
        </div>
        <div class="submit">
            <el-button @click="sumbit_personinfo" type="primary" style="width:100%;margin-top:1rem;">保存提交</el-button>
        </div>
        <el-dialog title="实名认证信息"  width="90%" :visible.sync="shiminFormVisible" :close-on-click-modal="false">
            <el-form :model="personinfo1">
                <el-form-item fixed label="输入真实姓名：" label-width="8rem">
                    <el-input v-model="personinfo1.realname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item fixed label="输入身份证号：" label-width="8rem">
                    <el-input v-model="personinfo1.idnum" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item fixed label="输入银行卡号：" label-width="8rem">
                    <el-input v-model="personinfo1.cardnum" autocomplete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel_shimin">取 消</el-button>
                <el-button type="primary" @click.native="submit_shimin">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>


export default {
    name: "shimin",
    data() {
        return {
            is_mod_flag:false,
            personinfo: {
                realname: '',
                idnum: '',
                cardnum: ''
            },
            personinfo1: {
                realname: '',
                idnum: '',
                cardnum: ''
            },
            shiminFormVisible: false,
        }
    },
    created() {
        this.get_userinfo();
    },
    methods: {
         get_userinfo() {
            var _this = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/getalluserinfo",
                {
                    "phone":_this.$store.state.login_id,
                    "pwd": _this.$store.state.login_pwd
                
                }
            ).then(function(res){
               console.log(res.data);
               _this.personinfo = res.data;
               _this.personinfo1 = _this.personinfo;
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack() {
            if(this.is_mod_flag==true){
                var x = confirm("修改内容未保存提交，确定退出？");
                if(x) {
                    this.$router.push("/setup")
                }

            }
            else {
                this.$router.push("/setup");
            }
            
        },
        cancel_shimin() {
            this.shiminFormVisible = false;
            this.personinfo1 = this.personinfo;
        },
        submit_shimin() {
            this.is_mod_flag = true;
            this.shiminFormVisible = false;
            this.personinfo = this.personinfo1;
            
        },
        sumbit_personinfo() {
            var vm = this;
            this.is_mod_flag = false;
            this.$axios.post(this.GLOBAL.serverSrc+"/saveuserinfoshimin",
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
