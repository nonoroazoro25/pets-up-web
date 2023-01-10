<template>
<el-row>
  <el-col :span="8" v-for="(pet, index) in petNameList" :key="index" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/images/erhu.jpg" class="image">
      <div style="padding: 14px;">
        <span>{{pet.name}}</span>
        <div class="bottom clearfix">
          <!-- <time class="time">{{  }}</time> -->
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>


<script>
import {getPetsList} from '@/api/requestData'
export default {

  data() {
    return {
      petNameList: []
    };
  },

  created(){
    this.initData();
  },

  methods: {
    async initData(){
      try{
          const petsList = await getPetsList();
          const petDetail = petsList.data.details
          if (petsList.code == 200) {
              this.petNameList = petDetail
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
