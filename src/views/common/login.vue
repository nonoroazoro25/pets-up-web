<template>
    <div class="login_container">
        <!-- 头像区域 -->
        <div class="avatar_box">
        </div>
        <!-- 表单区域 -->
        <div class="login_form">
          <p class="title">登录</p>
          <el-form :model="dataForm" :rules="dataRule" @keyup.enter.native="dataFormSubmit()">
              <!-- 用户名 -->
              <el-form-item prop="username">
                  <el-input v-model="dataForm.username" ref="dataForm" prefix-icon="el-icon-user-solid"></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="password">
                  <el-input prefix-icon="el-icon-lock" v-model="dataForm.password" type="password"></el-input>
              </el-form-item>
              <!-- 按钮 -->
              <el-form-item class="btns">
                  <el-button type="primary" @click="PetsLogin()">登录</el-button>
                  <el-button type="info">重置</el-button>
                  <p class="register" @click="getRegisterPage">没有账号？立即注册</p>
              </el-form-item>
          </el-form>
        </div>
    </div>
  </template>
  
<script>
  import {login} from '@/api/requestData' 

  export default {
    data () {
      return {
        dataForm: {
          username: '',
          password: ''
        },
        dataRule: {
          username: [
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
      },

			async PetsLogin() {
					
          const res = await login({username: this.dataForm.username, password: this.dataForm.password})
          if (res.code == 0) {
            this.$message({
                          type: 'success',
                          message: '登录成功'
                      });
            this.$router.push({path: '/'})
          }else{
            this.$message({
                          type: 'error',
                          message: res.message
                      });
          }
			},

    },

    }
  
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .login_container{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #aedff8;
    display: flex;
    align-items: center;
    justify-content: center;
    }


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

  .register {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
    color: #d10676;
    cursor: pointer;
    text-align: left;
    text-indent: 8px;
    width: 160px;
  }
  .register:hover {
    color: #2c2fd6;
  }

  </style>
  