<template>
    <div class="changpindetail">
        
        <div class="content">
            <div class="proinfo">
                <div class="title" style="display:flex;justify-content:space-between;">
                    <p style="font-size:1.5rem;">{{changpindata.name}}</p>
                    <i v-if="changpindata.is_collect==0" class="el-icon-star-off" style="font-size:2rem;margin-top:1rem;" @click="submit_collect"></i>
                    <i v-else class="el-icon-star-on" style="font-size:2rem;margin-top:1rem;color:gold" @click="cancel_collect"></i>
                </div>
                <div class="showimg" >
                    <el-image class="img" :style="{width:imgwidth,height:imgwidth}" :src="changpindata.imgurl" fit="fill"></el-image>
                </div>
                <div class="autor">
                    <span class="autortitle">作者</span>
                    <span class="autorvalue">{{changpindata.autor}}</span>
                </div>
                <div class="price">
                    <span class="pricevalue">￥{{changpindata.price}}</span>
                </div>
                <div class="buybtn">
                    <span v-if="is_self==true">
                        <el-button v-if="changpindata.status=='1'" @click="cancel_sell" style="width:100%;border-radius: 0.5rem;margin-top:0.5rem;" >取消出售</el-button>
                        <el-button v-if="changpindata.status=='2'" @click="sellFormVisible=true" style="width:100%;border-radius: 0.5rem;margin-top:0.5rem;" >出售</el-button>
                    </span>
                    <span v-else><el-button  @click="submitbuy" style="width:100%;border-radius: 0.5rem;margin-top:0.5rem;" >购买</el-button></span>
                    
                </div>
            </div>
            <div class="detail" >
                <p style="color:orange;text-align: center;font-size:1.1rem;"><i class="el-icon-orange"></i>作品描述</p>
                <p style="font-size:0.9rem">{{changpindata.detail}}</p>
            </div>
        </div>
        <div class="header" style="position: fixed;left:0rem;top:-1rem;height: 3rem;width:100%;background-color: white;">
            <el-page-header style="position:absolute;left:0px;margin-top:0.5rem" class="elpageheader"  @back="goBack" content="商品详情">
            </el-page-header>
        </div>
        <el-dialog title="出售"  width="90%" :visible.sync="sellFormVisible" :close-on-click-modal="false">
            <el-form :model="sellinfo">
                <el-form-item fixed label="输入出售价格：" label-width="8rem">
                    <el-input v-model="sellinfo.price" autocomplete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="sellFormVisible=false">取 消</el-button>
                <el-button type="primary" @click="sell">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>


export default {
    data() {
        return {
            origin: '',
            imgwidth:window.innerWidth*4/5+"px",
            changpindata: {},
            sellinfo:{
                "price":""
            },
            is_self:false,
            sellFormVisible:false,
            changpinid:"",
        }
    },
    created() {
        var current_url = window.location.href;
        this.origin = current_url.split("originurl=")[1];
        this.changpinid = current_url.split("changpinid=")[1].split("&originurl")[0];
        this.get_changpindetail(this.changpinid);

    },
    methods: {
        get_changpindetail(id) {
             var vm = this;
             let requestdata = {
                "id":id
             }
             if(this.$store.state.login_id!=null){
                 requestdata["phone"] = this.$store.state.login_id
             }
            this.$axios.post(this.GLOBAL.serverSrc+"/getchangpin_byid",
                requestdata
            ).then(function(res){
               console.log(res.data);
               vm.changpindata = res.data;
 
               if(vm.changpindata.phone==vm.$store.state.login_id){
                   vm.is_self = true;
               }
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack() {
            this.$router.push("/"+this.origin)
        },
        submitbuy() {
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/buy_changpin",
                {
                    "phone":vm.$store.state.login_id,
                    "pwd": vm.$store.state.login_pwd,
                    "product_id": vm.changpindata.positionid
                }
            ).then(function(res){
               console.log(res.data);
               
               alert(res.data);

            }).catch((err)=>{
                console.log(err)
            })
            
        },
        sell() {
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/sell_changpin",
                {
                    "phone":vm.$store.state.login_id,
                    "pwd": vm.$store.state.login_pwd,
                    "product_id": vm.changpindata.positionid,
                    "price": vm.sellinfo.price,
                }
            ).then(function(res){
               console.log(res.data);
               vm.sellFormVisible = false;
               alert(res.data);
               
               location.reload();
               vm.$router.go(0);
            }).catch((err)=>{
                console.log(err)
            })
            
        },
        cancel_sell() {
          var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/cancel_sell_changpin",
                {
                    "phone":vm.$store.state.login_id,
                    "pwd": vm.$store.state.login_pwd,
                    "product_id": vm.changpindata.positionid,
                }
            ).then(function(res){
               console.log(res.data);
               vm.sellFormVisible = false;
               alert(res.data);
               
               location.reload();
               vm.$router.go(0);
            }).catch((err)=>{
                console.log(err)
            })
            
        },
        submit_collect() {
            this.changpindata.is_collect = 1;
        },
        cancel_collect() {
            this.changpindata.is_collect = 0;
        }

    }
}
</script>
<style lang="less" scoped>

.content {
    margin-top:3rem;
    
}
.showimg {
    text-align: center;
    .img {
        border-radius: 7px;
    }
}
.autor {
    margin-top:0.1rem;
    display: flex;
    justify-content: space-between;
    .autortitle {
        color:rgba(0,0,0,0.3);
        font-size:0.8rem;
    }
    .autorvalue {
        font-size:1rem;
        color:skyblue;
    }
}
.price {
    margin-top:0.3rem;
    display: flex;
    justify-content: space-between;
    .pricetitle {
        color:rgba(0,0,0,0.3);
        font-size:0.8rem;
    }
    .pricevalue {
        font-size:1.3rem;
        color:skyblue;
    }
}
</style>
