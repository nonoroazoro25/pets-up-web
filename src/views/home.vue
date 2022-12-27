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
          <template slot="title">饮食</template>
          <el-menu-item index="1-1">早</el-menu-item>
          <el-menu-item index="1-2">中</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="要事记录">
          <el-menu-item index="1-3">疫苗</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">宠物列表</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
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
  