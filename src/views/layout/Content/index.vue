<template>
    <div>
        <!-- 顶部区域 -->
        <div class="header">
            <!-- <div class="icon">
                <i class="el-icon-caret-left"></i>
                <i class="el-icon-caret-right"></i>
            </div> -->
            <div class="header-right">
                <span>当前时间:</span>
                <span>欢迎:</span>
            </div>
        </div>

        <!-- 内容区域 -->
        <router-view></router-view>
    </div>    
</template>
  
<script>
    export default {

    }
</script>

<style scoped>
.header{
    background: skyblue;
    height: 50px;
    line-height: 50px;
    color: white;
    width: 100%;
}
.icon{
        font-size: 28px;
    }
.header-right{
    color: black;
    font-size:12px;
    flex:1;
    text-align:right;
    padding-right:20px;
}

</style>

