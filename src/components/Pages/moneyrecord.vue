<template>
    <div class="moneyrecord" style="display:flex;flex-direction:column;height:100%;">
        <div class="header" style="height: 3rem;width:100%;background-color: white;">
            <el-page-header style="position:absolute;left:0px;margin-top:0.5rem" class="elpageheader"  @back="goBack" content="余额明细">
            </el-page-header>
        </div>
        <div class="content" style="overflow-y:scroll;height:90vh;">
             <div class="itemcard"  v-for="(item,index) in record_data" :key="index">
            <div class="left">
                <div class="title">
                    <p>{{item.detail}}</p>
                </div>
                <div class="time" style="color:#C0C4CC">
                    {{item.datetime}}
                </div>
            </div>
            <div class="right">
                <div class="value">
                    <p>{{item.value}}</p>
                </div>
                <div class="status">
                    
                    <span v-if="item.status1=='审核中'" style="color:gold">{{item.status1}}</span>
                    <span v-if="item.status1=='已完成'" style="color:springgreen">{{item.status1}}</span>
                </div>

            </div>
        </div>
         <div style="height:4rem"></div>
        </div>
       
    </div>
</template>
<script>


export default {
    name: "moneyrecord",
    data() {
        return {
            record_data:[],
        }
    },
    created() {
        this.get_money_record();
    },
    methods:{
        get_money_record(){
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/get_all_moneyrecord",
                {
                    "phone":vm.$store.state.login_id,
                    "pwd":vm.$store.state.login_pwd
                }
            ).then(function(res){
               console.log(res.data);
               vm.record_data = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack(){
            this.$router.push('/zhichan')
        }
    }
}
</script>
<style lang="less" scoped>
.itemcard {
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    margin-top:0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
</style>
