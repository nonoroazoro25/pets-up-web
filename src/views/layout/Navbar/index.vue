<template>
    <div>
        <!-- 顶部区域 -->
        <div class="header">
            <!-- <div class="icon">
                <i class="el-icon-caret-left"></i>
                <i class="el-icon-caret-right"></i>
            </div> -->
            <div class="header-right">
                <el-dropdown :hide-on-click="false" @command="handleCommand">
                    <span class="el-dropdown-link">
                        我的<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="user">个人中心</el-dropdown-item>
                        <el-dropdown-item command="logot">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
         </div>
    </div>    
</template>
  
<script>
    export default {
        data() {
        return {

        }
      },
  
  methods: {
    async handleCommand(command) {
				if (command == 'user') {
					this.$router.push('/userDetail');
				}else if(command == 'logout'){
					const res = await signout()
					if (res.status == 1) {
						this.$message({
	                        type: 'success',
	                        message: '退出成功'
	                    });
	                    this.$router.push('/');
					}else{
						this.$message({
	                        type: 'error',
	                        message: res.message
	                    });
					}
				}
			},

  }

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

