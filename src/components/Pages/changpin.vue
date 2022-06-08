<template>
<div class="changpin">
    <!-- <div class="search" style="margin-top:1rem">
        <el-input v-model="searchdata" placeholder="请输入物品"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div> -->
    <div v-for="(item,index) in changpindatas" :key="index" class="item" @click="switch_changpindetail(item)">
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
</template>

<script>
export default{
    name: 'Changpin',
    data(){
        return {
            searchdata: "",
            imgwidth:window.innerWidth*1/3+"px",
            imgheight:Math.max(window.innerWidth*1/3-40,window.innerHeight/7)+"px",
            changpindatas:[]
        }
    },
    created(){
        // this.get_data();
        this.get_changpin_data();
    },
    methods: {
        get_changpin_data() {
            var vm = this;
            this.$axios.post(this.GLOBAL.serverSrc+"/query_shichang_changpin",
                {}
            ).then(function(res){
               console.log(res.data);
               vm.changpindatas = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
        switch_changpindetail(item) {
            console.log("data",item);
            this.$router.push("changpindetail?changpinid="+item.positionid+"&originurl=changpin");
        },
      

    }
}
</script>

<style lang="less" scoped>
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
