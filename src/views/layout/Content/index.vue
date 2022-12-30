<template>
    <div>
        <!-- 顶部区域 -->
        <div class="header">
            <!-- <div class="icon">
                <i class="el-icon-caret-left"></i>
                <i class="el-icon-caret-right"></i>
            </div> -->
            <div class="header-right">
                <div class="icon">
                    <i class="el-icon-setting"></i>
                </div>
            </div>
        </div>

        <!-- 内容区域 -->
        <div class="content">
            <router-view></router-view>
        </div>
        
    </div>    
</template>
  
<script>
    export default {

    }
</script>

<style scoped>

.header{
    background: #EAE7B1;
    height: 70px;
    line-height: 70px;
    color: white;
    width: 100%;
}
.icon{
        font-size: 24px;
    }
.header-right{
    color: black;
    font-size:12px;
    flex:1;
    text-align:right;
    padding-right:20px;
}
.content{
    padding-left:200px;
    padding-top:35px;
}

</style>

