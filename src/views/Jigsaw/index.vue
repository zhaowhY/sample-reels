<template>
  <div class="jigsaw-wrapper">
    <div id="container"></div>
    <div class="jigsaw-message">{{message}}</div>
  </div>
</template>

<script>
import jigsaw from 'jigsaw-captcha-js';

export default {
  data: () => ({
    x: 0,
    y: 0,
    message: '更多使用方式参考(https://www.npmjs.com/package/jigsaw-captcha-js)'
  }),
  mounted() {
    jigsaw.init({
      el: document.getElementById('container'),
      imgs: [], // 可选，默认为一张内置图片
      width: 310, // 可选, 默认310
      height: 155, // 可选, 默认155
      onSuccess: () => { this.message = '匹配成功'; },
      onFail: () => { this.message = '匹配失败'; },
      onRefresh: () => { this.message = '刷新成功'; }
    });
  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.jigsaw-wrapper {
  margin: 0 auto;
  padding-top: 100px;
}

.jigsaw-message {
  margin-top:24px;
  font-weight: bold;
  font-size: 20px;
}
</style>
