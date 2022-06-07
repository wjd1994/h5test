<template>
<div class="index">

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
   
    <div class="mangheitem" style="margin-top:5rem;text-align:center">
        暂无更多
    </div>
     <div class="header" style="position: fixed;left:0rem;top:-1rem;height: 3rem;width:100%;background-color: white;">
            <el-page-header style="position:absolute;left:0px;margin-top:0.5rem;margin-left:0.8rem" class="elpageheader"  @back="goBack" content="我的盲盒">
            </el-page-header>
    </div>

     
</div>
</template>

<script>

export default{
    name: 'MyManghe',
    data(){
        return {
            searchdata: "",
            imgwidth:window.innerWidth*4/5+"px",
            changpindatas:[
                
            ]
        }
    },
    created(){
        // this.get_indexchangpin_data();
    },
    methods: {
         goBack() {
            this.$router.push('/user')
        },
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
