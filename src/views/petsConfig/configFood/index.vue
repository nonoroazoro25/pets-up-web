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
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },

      created(){
        // this.initData();
      },

      methods: {
        // async initData(){
        //   try{
        //     const countData = await getUserCount();
        //     if(countDatqa.status==1){
        //       this.count = countData.count;
        //     }else{
        //       throw new Error("error")
        //     }
        //     this.getUsers();
        //   }catch(err){
        //     console.log('error')
        //   }
        // }
      }


    }

</script>


<style>

</style>