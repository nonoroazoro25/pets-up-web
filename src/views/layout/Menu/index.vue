<template>
    <div>
      <el-menu 
            default-active="/" 
            router
            background-color="#838383"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
        <el-menu-item index="/">
          <i class="el-icon-location"></i>
          <span slot="title">最近记录</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/petsList">
          <i class="el-icon-view"></i>
          <span slot="title">宠物列表</span>
        </el-menu-item>
        <el-menu-item index="/cookRecord">
          <i class="el-icon-edit"></i>
          <span slot="title">食谱记录</span>
        </el-menu-item>
        <el-submenu index="/petsConfig">
          <template slot="title">
          <i class="el-icon-setting"></i>
          <span>配置</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="/petsConfig/configFood">饮食</el-menu-item>
          <el-menu-item index="/petsConfig/configDoctor">疫苗</el-menu-item>
          <el-menu-item index="/petsConfig/configTag">tag</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      </el-menu>
    </div>
</template>
  
<script>
    export default {
      props: ['isCollapse']
    }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }

</style>

