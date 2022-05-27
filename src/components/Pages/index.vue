<template>
<div class="index">
    <div class="search" style="margin-top:1rem">
        <el-input v-model="searchdata" placeholder="请输入物品"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div>
    <div v-for="(item,index) in itemdatas" :key="index" class="item">
        <el-card :body-style="{ padding: '0.1rem' }">
            <el-image :style="{width:imgwidth,height:imgwidth}" :src="item.imgurl" fit="fill"></el-image>
            <div style="padding: 1rem;">
                <span>{{item.name}}</span>
                <div class="autor">
                    <span class="autortitle">作者</span>
                    <span class="autorvalue">{{item.autor}}</span>
                </div>
                <div class="price">
                    <span class="pricetitle">价格</span>
                    <span class="pricevalue">{{item.price}}</span>
                </div>
            </div>
        </el-card>
        
    </div>
     
</div>
</template>
<script>
export default{
    name: 'IndexPage',
    data(){
        return {
            searchdata: "",
            imgwidth:window.innerWidth-9+"px",
            itemdatas:[
                {
                    name: 'test',
                    autor: 'tom',
                    price: "49.0",
                    imgurl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"     
                },
                {
                    name: 'test',
                    autor: 'tom',
                    price: "49.0",
                    imgurl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"     
                },
            ]
        }
    }
}
</script>

<style scopes lang="less">
.item {
    margin-top:0.8rem;
    
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
