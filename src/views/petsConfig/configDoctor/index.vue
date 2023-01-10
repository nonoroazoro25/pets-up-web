<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="dose"
        label="剂量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="反应">
      </el-table-column>
    </el-table>
</template>

<script>
    import {getDewormList} from '@/api/requestData'

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
              const dewormList = await getDewormList();
              const dewormListDetail = dewormList.data.details
              console.log('dewormList', dewormList)
              if (dewormList.code == 200) {

                for (let i = 0; i < dewormListDetail.length; i++) {
                  this.tableData.push({
                    date: dewormListDetail[i].create_time,
                    dose: dewormListDetail[i].dose,
                    remark: dewormListDetail[i].remark
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