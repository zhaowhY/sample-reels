<template>
  <div>
    <div class="header">
      <div style="margin-bottom: 16px;">
        <el-button
          @click="changePage('prev')"
          type="primary"
        > <i class="el-icon-back"></i> 前进</el-button>
        <el-button
          @click="changePage('next')"
          type="primary"
        >后退 <i class="el-icon-right"></i> </el-button>
      </div>
      <div style="font-size: 17px; font-weight: bold">{{currentPage}} / {{pageNums}}</div>
    </div>
    <pdf
      :src="`${publicPath}files/test.pdf`"
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
    pageNums: 1,
    publicPath: process.env.BASE_URL
  }),
  components: {
    pdf
  },
  methods: {
    computePages(pageNums) {
      this.pageNums = pageNums;
    },
    changePage(type) {
      let page = this.currentPage;
      if (type === 'prev') page -= 1;
      else page += 1;
      if (page < 1) page = 1;
      if (page > this.pageNums) page = this.pageNums;
      this.currentPage = page;
    }

  }
};
</script>

<style lang="less" scoped>
.header {
  text-align: center;
  margin-top: 60px;
}
</style>
