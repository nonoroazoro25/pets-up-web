<template>
    <div>
        <!-- <h2>系统首页</h2> -->
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item 
            
            v-for="(article, index) in articleList"
            :name="index"
            :title="article.title"
            :key="article.title">
                <!-- <div>{{article.title}}</div> -->
                <div>{{article.content}}</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
  
<script>
import {getArticleList} from '@/api/requestData'
export default {
    data() {
      return {
        activeName: '1',
        articleList: []
      };
    },

    created(){
    this.initData();
  },
  
    methods: {
        async initData(){
        try{
            const articleList = await getArticleList();
            const articleListDetail = articleList.data.details
            if (articleList.code == 200) {
                this.articleList = articleListDetail
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

<style scoped>

</style>

