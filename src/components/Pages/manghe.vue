<template>
<div class="index">
    <div class="search" style="margin-top:1rem">
        <el-input v-model="searchdata" placeholder="请输入搜索内容"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div>
    <div class="itemtitle"> 
        <span style="font-size:1rem"><i class="el-icon-present" style="color:aqua"></i>盲盒</span>
    </div>
    <div v-for="(item,index) in changpindatas" :key="index" class="item" @click="switch_changpindetail(item)">
        <el-card :body-style="{ padding: '0.1rem' }">
            <div class="showimg" >
                <el-image class="img" :style="{width:imgwidth,height:imgwidth}" :src="item.imgurl" fit="fill"></el-image>
            </div>
            <div style="padding: 1rem;">
                <span>{{item.name}}</span>
                <div class="autor">
                    <span class="autortitle">作者</span>
                    <span class="autorvalue">{{item.autor}}</span>
                </div>
                <div class="price">
                    <span class="pricetitle">价格</span>
                    <span class="pricevalue">￥{{item.price}}</span>
                </div>
            </div>
        </el-card>
        
    </div>
   
    <div class="mangheitem" style="margin-top:1rem;text-align:center">
        暂无更多
    </div>
     
</div>
</template>

<script>

export default{
    name: 'MangHe',
    data(){
        return {
            searchdata: "",
            imgwidth:window.innerWidth*4/5+"px",
            changpindatas:[
                {
                    name: '战机',
                    autor: '元宇宙出品',
                    price: "待售",
                    path: "/changpindetail?changpin=0",
                    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.9k9k.com%2Fm%2Fappimg%2F202109%2F2616225944z2.png&refer=http%3A%2F%2Fimages.9k9k.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657105565&t=a40e4393fa45ff7a48277a890a6891e0"     
                },
            ]
        }
    },
    created(){
        // this.get_indexchangpin_data();
    },
    methods: {
        get_indexchangpin_data() {
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/getindexchangpin",
                {}
            ).then(function(res){
               console.log(res.data);
               vm.changpindatas = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
        switch_to_changpin() {
            // this.$router.push("/changpin");
        },
        switch_to_manghe() {
            this.$router.push("/manghe");
        },
        switch_changpindetail(item) {
            // this.$router.push("changpindetail?changpinid="+item.id+"&originurl=index");
        },
    }
}
</script>

<style lang="less" scoped>
.itemtitle {
    margin-top:1rem;
    display:flex;
    justify-content: space-between;
}
.item {
    margin-top:0.8rem;
    
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
        font-size:1rem;
        color:skyblue;
    }
}


</style>
