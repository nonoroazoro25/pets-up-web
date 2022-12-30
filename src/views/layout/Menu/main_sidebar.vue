<template>
    <el-row class="tac">
    <el-col :span="3">
      <h5>Pet's UP</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>最近记录</span>
          </template>
          <el-menu-item-group>
            <!-- <template slot="title">饮食</template> -->
            <el-menu-item index="1-1">饮食</el-menu-item>
            <el-menu-item index="1-2">疫苗</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-view"></i>
          <span slot="title">宠物列表</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-edit"></i>
          <span slot="title">食谱记录</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>配置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">饮食</el-menu-item>
            <el-menu-item index="5-2">疫苗</el-menu-item>
            <el-menu-item index="5-3">tag</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
   </el-row>
  </template>
    
  <script>
      export default {
      methods: {
          handleOpen(key, keyPath) {
          console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
          console.log(key, keyPath);
          }
      }
      }
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
    