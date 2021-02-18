<template>
  <div>
    <el-button @click="currentPage--">前进</el-button>
    <el-button @click="currentPage++">后退</el-button>
    {{currentPage}} / {{pageNums}}
    <pdf
      src="./files/test/pdf"
      :page="currentPage"
      @num-pages="computePages"
    ></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf';

export default {
  data: () => ({
    currentPage: 1,
    pageNums: 1
  }),
  components: {
    pdf
  },
  methods: {
    computePages(pageNums) {
      this.pageNums = pageNums;
    }

  }
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 60px;
  color: rgb(238, 238, 238);
  background: rgb(45, 58, 75);
}
</style>
