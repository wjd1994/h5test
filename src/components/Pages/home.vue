<template>
<div class="changpin">
    <div class="search" style="margin-top:1rem">
        <el-input v-model="searchdata" placeholder="请输入物品" @keydown.native.enter="search"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div>
    <div v-for="(item,index) in datas" :key="index" class="item" @click="switch_changpindetail(item)">
        <div class="itemcard">

            <el-image class="img" :style="{width:imgwidth,height:imgheight}" :src="item.imgurl" fit="fill"></el-image>


            <div style="margin-left: 1rem;" class="info">
                <span>{{item.name}}</span>
                <div>
                    <div class="autor">
                        <span class="autortitle">作者</span>
                        <span class="autorvalue">{{item.autor}}</span>
                    </div>
                    <div class="autor">
                        <span class="autortitle">日期</span>
                        <span class="autorvalue">{{item.datetime}}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
     
</div>
</template>

<script>
export default{
    name: 'HomePage',
    data(){
        return {
            searchdata: "",
            imgwidth:window.innerWidth*1/3+"px",
            imgheight:Math.max(window.innerWidth*1/3-40,window.innerHeight/7)+"px",
            datas: [],
            changpindatas:[
                {
                    name: "可爱的小白兔",
                    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170713%2F58c76618427e4802bb1d38f4fbfaacac.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657363116&t=ce8b9f24239861553b949fb84ab7e25d",
                    autor: "独孤求败",
                    datetime: "2021-12-25"
                },
                {
                    name: "滑稽的松鼠",
                    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0506%2Fda35f1ddg00qsnuy300jzc000f000dkg.gif&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657363500&t=a1f3c5d709943b4f039a068f012ba708",
                    autor: "独孤求败",
                    datetime: "2021-12-25"
                },
                {
                    name: "海绵宝宝",
                    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20191209%2Fec9db4131653441783b659e8fd3027bb.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657363604&t=e34ef54404ecc8c2d40e089d9327fb90",
                    autor: "独孤求败",
                    datetime: "2021-12-25"
                },
                {
                    name: "原神胡桃",
                    imgurl: "https://img1.baidu.com/it/u=1191470019,3169630178&fm=253&fmt=auto&app=138&f=GIF?w=371&h=305",
                    autor: "独孤求败",
                    datetime: "2021-12-25"
                },
                {
                    name: "天动万象",
                    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.9game.cn%2F2020%2F12%2F3%2F187512073.gif&refer=http%3A%2F%2Fimage.9game.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657363740&t=095158bfe7cc761eb4dc9fb1b285978b",
                    autor: "独孤求败",
                    datetime: "2021-12-25"
                },
                {
                    name: "巴巴托斯",
                    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.clinicmed.net%2Fuploadimg%2Fimage%2F20200921%2F16006596145f68209e8504a3.48430850.gif&refer=http%3A%2F%2Fimg.clinicmed.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657363684&t=e7a7af9683ffc485ea07174870269769",
                    autor: "独孤求败",
                    datetime: "2021-12-25"
                }
            ]
        }
    },
    created(){
        this.datas = this.changpindatas;
    },
    methods: {
        switch_changpindetail(item) {
            console.log("data",item);
            this.$router.push("changpindetail?changpinid="+item.positionid+"&originurl=changpin");
        },
        search(){
            this.datas = [];
            for(var i=0;i<this.changpindatas.length;i++){
                if(this.changpindatas[i].name.includes(this.searchdata)){
                    this.datas.push(this.changpindatas[i]);
                }
            }
        }
      

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
.datetime {
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
