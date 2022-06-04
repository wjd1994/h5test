<template>
    <div class="changpindetail">
        
        <div class="content">
            <div class="proinfo">
                <div class="title">
                    <p style="font-size:1.5rem;">{{proinfodata.name}}</p>
                </div>
                <div class="showimg" >
                    <el-image class="img" :style="{width:imgwidth,height:imgwidth}" :src="proinfodata.imgurl" fit="fill"></el-image>
                </div>
                <div class="autor">
                    <span class="autortitle">作者</span>
                    <span class="autorvalue">{{proinfodata.autor}}</span>
                </div>
                <div class="price">
                    <span class="pricevalue">{{proinfodata.price}}</span>
                </div>
                <div class="buybtn">
                    <el-button @click="submitbuy" style="width:100%;border-radius: 0.5rem;margin-top:0.5rem;" >购买</el-button>
                </div>
            </div>
            <div class="detail" >
                <p style="color:orange;text-align: center;font-size:1.1rem;"><i class="el-icon-orange"></i>作品描述</p>
                <p style="font-size:0.9rem">{{proinfodata.detail}}</p>
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
            proinfodata: {
                name: 'test',
                autor: 'tom',
                price: "49.0",
                imgurl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
                detail: "测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例测试用例"
            }
        }
    },
    created() {
        var current_url = window.location.href;
        this.origin = current_url.split("originurl=")[1];
    },
    methods: {
        goBack() {
            this.$router.push("/"+this.origin)
        },
        submitbuy() {
            alert("暂不支持")
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
