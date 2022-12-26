<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
            </div>
            <!-- 表单区域 -->
            <div class="login_form">
              <p class="title">登录</p>
              <el-form :model="dataForm" :rules="dataRule" @keyup.enter.native="dataFormSubmit()">
                  <!-- 用户名 -->
                  <el-form-item prop="userName">
                      <el-input v-model="dataForm.userName" ref="dataForm" prefix-icon="el-icon-user-solid"></el-input>
                  </el-form-item>
                  <!-- 密码 -->
                  <el-form-item prop="password">
                      <el-input prefix-icon="el-icon-lock" v-model="dataForm.password" type="password"></el-input>
                  </el-form-item>
                  <!-- 按钮 -->
                  <el-form-item class="btns">
                      <el-button type="primary" @click="dataFormSubmit">登录</el-button>
                      <el-button type="info">重置</el-button>
                      <p @click="getRegisterPage">没有账号？立即注册</p>
                  </el-form-item>
              </el-form>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        dataForm: {
          userName: '',
          password: ''
        },
        dataRule: {
          userName: [
            { required: true, message: '帐号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      }
    },
 
    methods: {
      // 提交表单
      dataFormSubmit () {
        alert('submit!');
        
      },

      getRegisterPage (){
        this.$router.push({
          path: '/register',
        })
      }
    }

    }
  
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .login_form {
    position: absolute;
    bottom: 200px;
    width:30%;
    padding:20px 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content:flex-end;
  }

  .title {
    font-size: 26px;
    line-height: 50px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  }

  </style>
  