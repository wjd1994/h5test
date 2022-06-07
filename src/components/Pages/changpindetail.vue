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
                    <el-button @click="submitbuy" style="width:100%;border-radius: 0.5rem;margin-top:0.5rem;" >购买</el-button>
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
    </div>
</template>
<script>


export default {
    data() {
        return {
            origin: '',
            imgwidth:window.innerWidth*4/5+"px",
            changpindata: {
                name: 'test',
                autor: 'tom',
                price: "49.0",
                imgurl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
                detail: "测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例"
            },
            changpindata: {}
        }
    },
    created() {
        var current_url = window.location.href;
        this.origin = current_url.split("originurl=")[1];
        let changpinid = current_url.split("changpinid=")[1].split("&originurl")[0];
        this.get_changpindetail(changpinid);

    },
    methods: {
        get_changpindetail(id) {
             var vm = this;
             let requestdata = {
                "id":id
             }
             if(this.$store.state.login_id!='0'){
                 requestdata["phone"] = this.$store.state.login_id
             }
            this.$axios.post(this.GLOBAL.serverSrc+"/getchangpin_byid",
                requestdata
            ).then(function(res){
               console.log(res.data);
               vm.changpindata = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack() {
            this.$router.push("/"+this.origin)
        },
        submitbuy() {
            alert("暂不支持")
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
