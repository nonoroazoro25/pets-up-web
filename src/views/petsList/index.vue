<template>
    <el-row>
        <el-col :span="5" v-for="(o, index) in petNameList" :key="o" :offset="index > 0 ? 2 : 0">

            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{o}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 1" :key="o" class="text item">
                    <img src="../../assets/images/erhu2.jpg" class="image">
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
            for (let i = 0; i < petDetail.length; i++) {
              this.petNameList.push(petDetail[i].name)
            }
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
