<template>
    <div class="setup">
        <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="实名认证">
            </el-page-header>
        </div>
        <div class="content">
            <div class="name" @click="shiminFormVisible=true">
                <p>真实姓名</p>
                <p>{{personinfo.name}}<i class="el-icon-arrow-right" ></i></p>
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
                    <el-input v-model="personinfo1.name" autocomplete="off"></el-input>
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
                name: 'Jack',
                idnum: '511843188411258943',
                cardnum: '621443528954'
            },
            personinfo1: {
                name: 'Jack',
                idnum: '511843188411258943',
                cardnum: '621443528954'
            },
            shiminFormVisible: false,
        }
    },
    methods: {
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
        submit_idnum() {
            var a = prompt("请输入真实身份证号"); 
            if(a){
                this.personinfo.idnum = a;
                this.is_mod_flag = true;
            }
        },
        submit_cardnum() {
            var a = prompt("请输入银行卡号"); 
            if(a){
                this.personinfo.cardnum = a;
                this.is_mod_flag = true;
            }
        },
        sumbit_personinfo() {
            this.is_mod_flag = false;
            alert("保存成功")
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
