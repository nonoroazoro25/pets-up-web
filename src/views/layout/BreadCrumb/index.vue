<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item 
            :to="{ path: item.path}"
            v-for="item in breadcrumList"
            :key="item.path"
            >
            {{item.meta.title}}
            
            </el-breadcrumb-item>
        </el-breadcrumb>

    </div>

</template>

<script>
    export default{

        computed:{
            breadcrumList(){
                return this.$route.matched
            }
        },

        created(){
            console.log(this.$route.matched);
        
        }
        
    }

</script>

<style>
.breadcrumb{
    background-color: #f7f8f9;
    margin-left: 200px;
    margin-top: 5px;
    margin-right: -20px;
    padding-top:10px;
    padding-left:10px;
    height: 20px;
}


</style>