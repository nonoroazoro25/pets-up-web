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
          <el-menu-item index="/petsConfig/configFood">常用食物</el-menu-item>
          <el-menu-item index="/petsConfig/configDoctor">驱虫记录</el-menu-item>
          <el-menu-item index="/petsConfig/configTag">文章tag</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      </el-menu>
    </div>
</template>
  
<script>
    export default {
      props: ['isCollapse'],

      data(){
        return {
      }

      },


      method:{
    // todo
      getPetsList(){
        this.$axios.get('http://localhost:2020/api/pets/list').then(({data}) => {
            if (data && data.code === 0) {
              this.petNameList = data
              console.log(data);
            } else {
              Message.error("something error")
            }
          })
      }

  }
    }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 200px;
  }

</style>

