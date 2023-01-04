<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

</template>

<script>
    export default{
        
    }

</script>

<style>
.breadcrumb{
    background-color: #f7f8f9;
    margin-left: 200px;
    margin-top: 5px;
    margin-right: -20px;
    padding-top:10px;
    padding-left:10px;
    height: 20px;
}


</style>