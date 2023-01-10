<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="分量">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    import {getFoodMaterial} from '@/api/requestData'

    export default {
      data() {
        return {
          tableData: []
        }
      },

  created(){
    this.initData();
  },
  
  methods: {
    async initData(){
      try{
          const foodList = await getFoodMaterial();
          const foodListDetail = foodList.data.details
          console.log('foodList', foodList)
          if (foodList.code == 200) {

            for (let i = 0; i < foodListDetail.length; i++) {
              this.tableData.push({
                name: foodListDetail[i].name
              })
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

</style>