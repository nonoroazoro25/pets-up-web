<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
            </div>
            <!-- 表单区域 -->
            <el-form label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item>
                    <el-input prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item>
                    <el-input prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary">登录</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </template>
  
  <script>
  export default {

    name: 'Login',
    data () {
      return {
        msg: 'Login '
      }
    }

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .login_form {
    position: absolute;
    bottom: 100px;
    width:100%;
    padding:0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content:flex-end;
  }

  </style>
  