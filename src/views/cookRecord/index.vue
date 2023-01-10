<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>食谱记录</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
</template>

<script>
import {getRecipeList} from '@/api/requestData'

export default {
  data() {
        return {

        }
      },

  created(){
    this.initData();
  },
  
  methods: {
    async initData(){
      try{
          const frecipeList = await getRecipeList();
          if (foodList.code == 200) {

          }else{
              throw new Error('获取数据失败');
          }
      }catch(err){
          console.log('获取数据失败', err);
      }
    },
  }
    
}

</script>


<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }

</style>