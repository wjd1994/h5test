<template>
    <div class="zhichan" style="text-align:center;width:100%">
    <p style="font-size:1.2rem;margin-top:0.5rem;position:absolute;;right:1rem" @click="enter_moneryrecord">余额明细</p>
        <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="我的资产">
            </el-page-header>
            
        </div>
        <i class="el-icon-coin" style="color:gold;font-size:2rem;margin-top:7rem;"></i>
        <p>我的余额</p>
        <p>{{money}}</p>
        <el-button type="success" style="margin-top:10rem;" @click="chongzhiformvisible=true">充值</el-button>
        <el-button type="success" @click="tixianformvisible=true">提现</el-button>
        <el-dialog title="充值金额"  width="90%" :visible.sync="chongzhiformvisible" :close-on-click-modal="false">
            <el-form :model="chongzhiinfo">
                <el-form-item fixed label="输入充值金额：" label-width="8rem">
                    <el-input v-model="chongzhiinfo.money" autocomplete="off"></el-input>
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
                    <el-input v-model="tixianinfo.money" autocomplete="off"></el-input>
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
                phone:this.$store.state.login_id,
                money: ''
            },
            tixianinfo: {
                phone:this.$store.state.login_id,
                money: ''
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
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/deposit",
               vm.chongzhiinfo
            ).then(function(res){
               console.log(res.data);
               vm.sellFormVisible = false;
               if(res.data=="success"){
                    vm.$message({
                    message: "充值成功",
                    type: 'success'
                    });
               }
               else{
                    vm.$message({
                        message: res.data,
                        type: 'success'
                    });
               }
               
               
                setTimeout(()=>{
                    location.reload();
                    vm.$router.go(0);
                },1500)
            }).catch((err)=>{
                console.log(err)
            })
            
        },
        submit_tixian() {
            this.tixianformvisible = false
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/cashout",
               vm.tixianinfo
            ).then(function(res){
               console.log(res.data);
               vm.sellFormVisible = false;
               if(res.data=="success"){
                    vm.$message({
                    message: "提现请求提交成功，工作人员将在24小时内审批提现，请耐心等待",
                    type: 'success'
                    });
                    setTimeout(()=>{
                        location.reload();
                        vm.$router.go(0);
                    },3000)
               }
               else{
                    vm.$message({
                        message: res.data,
                        type: 'error'
                    });
                    setTimeout(()=>{
                        location.reload();
                        vm.$router.go(0);
                    },1000)
               }
               
               
                
            }).catch((err)=>{
                console.log(err)
            })
        },
        enter_moneryrecord(){
            this.$router.push('/moneyrecord')
        }
    }
}
</script>
