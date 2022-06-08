<template>
<div class="mychangpin">
    
    <div class="content">
        <div v-for="(item,index) in collectdatas" :key="index" class="item" @click="switch_changpindetail(item)">
            <div class="itemcard">

                <el-image class="img" :style="{width:imgwidth,height:imgheight}" :src="item.imgurl" fit="fill"></el-image>


                <div style="margin-left: 1rem;" class="info">
                    <span>{{item.name}}</span>
                    <div>
                        <div class="autor">
                            <span class="autortitle">作者</span>
                            <span class="autorvalue">{{item.autor}}</span>
                        </div>
                        <div class="price">
                            <span class="pricetitle">价格</span>
                            <span class="pricevalue">￥{{item.price}}</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div class="mangheitem" style="margin-top:5rem;text-align:center">
        暂无更多
    </div>
    <div class="header" style="position: fixed;left:0rem;top:-1rem;height: 3rem;width:100%;background-color: white;">
            <el-page-header style="position:absolute;left:0px;margin-top:0.5rem;margin-left:0.8rem" class="elpageheader"  @back="goBack" content="我的藏品">
            </el-page-header>
    </div>

     
</div>
</template>

<script>
export default{
    name: 'mychangpin',
    data(){
        return {
            searchdata: "",
            imgwidth:window.innerWidth*1/3+"px",
            imgheight:Math.max(window.innerWidth*1/3-40,window.innerHeight/7)+"px",
            collectdatas:[
               
            ]
        }
    },
    created(){
        // this.get_data();
        this.get_collect_data();
    },
    methods: {
        get_collect_data() {
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/getchangpinfo_bypositionlist",
                {
                    "phone": this.$store.state.login_id
                }
            ).then(function(res){
               console.log(res.data);
               vm.collectdatas = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
        goBack() {
            this.$router.push('/user')
        },
        switch_changpindetail(item) {
            this.$router.push("changpindetail?changpinid="+item.positionid+"&originurl=mychangpin");
        },
    }
}
</script>

<style lang="less" scoped>
.content {
    margin-top:4rem;
}
.item {
    margin-top:0.8rem;
    
    
}
.itemcard {
    display: flex;
    flex-direction: row;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
    
}
.img {
    border-radius: 4px;
        
}

.info {
    width:70%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
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
