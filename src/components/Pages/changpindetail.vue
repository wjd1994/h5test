<template>
    <div class="changpindetail">
        <div class="header">
            <el-page-header @back="goBack" content="商品详情">
            </el-page-header>
        </div>
        <div class="content">

        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            origin: ''
        }
    },
    created() {
        var current_url = window.location.href;
        this.origin = current_url.split("originurl=")[1];
    },
    methods: {
        goBack() {
            this.$router.push("/"+this.origin)
        }
    }
}
</script>
