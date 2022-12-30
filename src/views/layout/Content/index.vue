<template>
    <div>
        <!-- 顶部区域 -->
        <!-- <div class="header"> -->
            <!-- <div class="icon">
                <i class="el-icon-caret-left"></i>
                <i class="el-icon-caret-right"></i>
            </div> -->
            <!-- <div class="header-right">
                <span>当前时间:</span>
                <span>欢迎:</span>
            </div> -->
        <!-- </div> -->
        <el-menu
            class="site-navbar__menu site-navbar__menu--right"
            mode="horizontal">
        
            <el-menu-item index="1">
                <template slot="title">
                    <el-badge value="new">
                    <icon-svg name="shezhi" class="el-icon-setting"></icon-svg>
                    </el-badge>
                </template>
            </el-menu-item>

        </el-menu>

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
.content{
    padding-left:200px;
}

</style>

