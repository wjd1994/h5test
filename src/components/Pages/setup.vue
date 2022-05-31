<template>
    <div class="setup">
        <div class="header" style="top:0rem;position: fixed;height: 2rem;background-color: white;">
            <el-page-header class="elpageheader" style="margin-top:0.5rem;" @back="goBack" content="个人信息修改">
            </el-page-header>
        </div>
        <div class="content">
            <div class="avatar">
                <p>头像</p>
                <input style="border:none;outline: none;" type="text" />
            </div>
        </div>
        
    </div>
</template>
<script>


export default {
    name: "setup",
    data() {
        return {

        }
    },
    methods: {
        goBack() {
            this.$router.push("/user")
        },
    }
}
</script>
<style scoped>
.content {
    margin-top:4rem;
}
.content div {
    display:flex;
    justify-content: space-between;
    border-bottom: 2px solid aliceblue;
}
</style>
