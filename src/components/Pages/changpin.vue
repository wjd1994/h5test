<template>
<div class="changpin">
    <div class="search" style="margin-top:1rem">
        <el-input v-model="searchdata" placeholder="请输入物品"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
    </div>
    <div v-for="(item,index) in itemdatas" :key="index" class="item" @click="switch_changpindetail(item)">
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
                        <span class="pricevalue">{{item.price}}</span>
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
            itemdatas:[
                {
                    name: '名古屋',
                    autor: '元宇宙出品',
                    price: "37.0元",
                    path: "/changpindetail?changpin=0",
                    imgurl: "https://kuakeshucang.oss-cn-beijing.aliyuncs.com/uploads/20220429/edab89e92578af9b97dd71f62c074faa.gif"     
                },
                {
                    name: '世外桃源',
                    autor: 'Jack',
                    price: "49.0",
                    path: "/changpindetail?changpin=1",
                    imgurl: "https://kuakeshucang.oss-cn-beijing.aliyuncs.com/uploads/20220429/fdb29649f966b9421a8036779df358aa.gif"     
                },
                {
                    name: '太空基地',
                    autor: 'tom',
                    price: "49.0",
                    path: "/changpindetail?changpin=2",
                    imgurl: "https://kuakeshucang.oss-cn-beijing.aliyuncs.com/uploads/20220429/e2f2bee01c7b4d12841e055b9ef6f5b8.gif"     
                },
                {
                    name: 'test',
                    autor: 'tom',
                    price: "49.0",
                    path: "/changpindetail?changpin=0",
                    imgurl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"     
                },
                {
                    name: 'test',
                    autor: 'tom',
                    price: "49.0",
                    path: "/changpindetail?changpin=0",
                    imgurl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"     
                },
            ]
        }
    },
    created(){
        // this.get_data();
        this.get_jsondata();
    },
    methods: {
        get_jsondata() {
            
        },
        switch_changpindetail(item) {
            this.$router.push(item.path+"&originurl=changpin");
        },
        get_data(){
            this.$axios.get("test.db", {responseType: 'arraybuffer'})
        .then(function (response) {
            let db = new window.SQL.Database(new Uint8Array(response.data));
            // 执行查询
            let s = new Date().getTime();
            let r = db.exec("SELECT * FROM fast95user WHERE id = 1;");
            let e = new Date().getTime();
            console.info("查询数据耗时：" + (e - s) + "ms");
            // 解析数据
            let obj = dbToObj(r);
            console.info(obj);
        })
        .catch(function (error) {
            console.info(error);
        });

    // 方法传入两个数组，第一个数组为key，第二个数组对应位置为value，此方法在Python中为zip()函数。
    const ArraytoObj = (keys = [], values = []) => {
        if (keys.length === 0 || values.length === 0) return {};
        const len = keys.length > values.length ? values.length : keys.length;
        const obj = {};
        for (let i = 0; i < len; ++i) {
            obj[keys[i]] = values[i]
        }
        return obj;
    };

    // 转驼峰表示：func.camel('USER_ROLE',true) => UserRole
    // 转驼峰表示：func.camel('USER_ROLE',false) => userRole
    const camel = (str, firstUpper = false) => {
        let ret = str.toLowerCase();
        ret = ret.replace(/_([\w+])/g, function (all, letter) {
            return letter.toUpperCase();
        });
        if (firstUpper) {
            ret = ret.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
                return $1.toUpperCase() + $2;
            });
        }
        return ret;
    };

    // 把数组里面的所有转化为驼峰命名
    const camelArr = (arrs = []) => {
        let _arrs = [];
        arrs.map(function (item) {
            _arrs.push(camel(item));
        });
        return _arrs;
    };

    // 读取数据库
    // 1.把columns转化为驼峰；
    // 2.把columns和values进行组合；
    const dbToObj = (_data = {}) => {
        let _res = [];
        _data.map(function (item) {
            let _columns = camelArr(item.columns);
            item.values.map(function (values) {
                _res.push(ArraytoObj(_columns, values));
            });
        });
        return _res;
    };
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
