<template>
    <div>
        <!-- 顶部区域 -->
        <div class="header">
            <!-- <div class="icon">
                <i class="el-icon-caret-left"></i>
                <i class="el-icon-caret-right"></i>
            </div> -->
            <div class="header-right">
                <el-dropdown :hide-on-click="false">
                    <span class="el-dropdown-link">
                        我的<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
         </div>
        
    </div>    
</template>
  
<script>
    export default {

    }
</script>

<style scoped>

.header{
    background: #D9ADAD;
    height: 40px;
    line-height: 40px;
    width: 102%;
    margin-top:-6px;
    margin-left: -10px;
    padding:0;
}
.nav_text{
    font-size:20px
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

