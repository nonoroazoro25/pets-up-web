<template>
  <el-row>
  <el-col :span="8" v-for="(o, index) in recipeList" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/images/avatar.png" class="image">
      <div style="padding: 14px;">
        <span>{{o.name}}</span>
        <div class="bottom clearfix">
          {{ o.remark }}
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</template>

<script>
import {getRecipeList} from '@/api/requestData'

export default {
  data() {
        return {
          recipeList:[]

        }
      },

  created(){
    this.initData();
  },
  
  methods: {
    async initData(){
      try{
          const recipeList = await getRecipeList();
          const recipeListDetail = recipeList.data.details;
          console.log('recipe', recipeList)
          if (recipeList.code == 200) {
            this.recipeList = recipeListDetail

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
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>