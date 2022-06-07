<template>
    <div class="zhichan" style="text-align:center">
        <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="我的资产">
            </el-page-header>
        </div>
        <i class="el-icon-coin" style="color:gold;font-size:2rem;margin-top:7rem;"></i>
        <p>我的金币</p>
        <p>{{money}}</p>
        <el-button type="success" style="margin-top:10rem;" @click="chongzhiformvisible=true">充值</el-button>
        <el-button type="success" @click="tixianformvisible=true">提现</el-button>
        <el-dialog title="充值金额"  width="90%" :visible.sync="chongzhiformvisible" :close-on-click-modal="false">
            <el-form :model="chongzhiinfo">
                <el-form-item fixed label="输入充值金额：" label-width="8rem">
                    <el-input v-model="chongzhiinfo.value" autocomplete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="chongzhiformvisible=false">取 消</el-button>
                <el-button type="primary" @click.native="submit_chongzhi">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="提现金额"  width="90%" :visible.sync="tixianformvisible" :close-on-click-modal="false">
            <el-form :model="tixianinfo">
                <el-form-item fixed label="输入提现金额：" label-width="8rem">
                    <el-input v-model="tixianinfo.value" autocomplete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="tixianformvisible=false">取 消</el-button>
                <el-button type="primary" @click.native="submit_tixian">确 定</el-button>
            </div>
        </el-dialog>
    </div>
    
</template>
<script>


export default {
    name: 'zhichan',
    data() {
        return {
            money: 0,
            chongzhiformvisible: false,
            tixianformvisible: false,
            chongzhiinfo: {
                value: '0'
            },
            tixianinfo: {
                value: '0'
            }
        }
    },
    created() {
        this.get_reducemoney()
    },
    methods: {
        get_reducemoney() {
            var _this = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/getreducemoney",
                {
                    "phone":_this.$store.state.login_id
                }
            ).then(function(res){
               console.log(res.data);
               _this.money = res.data.reducemoney;
               
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack() {      
            this.$router.push("/user")
        },
        submit_chongzhi() {
            this.chongzhiformvisible = false
            this.chongzhiinfo.value='0'
        },
        submit_tixian() {
            this.tixianformvisible = false
            this.tixianinfo.value='0'
        }
    }
}
</script>
