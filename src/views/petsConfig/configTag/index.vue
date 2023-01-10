<template>
    <div>
        <el-tag
        v-for="tag in dynamicTags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
        </el-tag>

        <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>

</template>

<script>
  import {getTagList} from '@/api/requestData'

  export default {
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },

    created(){
    this.initData();
    },


    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      async initData(){
      try{
          const TagList = await getTagList();
          const TagListDetail = TagList.data.details
          if (TagList.code == 200) {
              for (let i = 0; i < TagListDetail.length; i++) {
                 this.dynamicTags.push({
                  name: TagListDetail[i].type,
                  type: TagListDetail[i].type
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
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

</style>