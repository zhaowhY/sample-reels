<template>
  <div class="jigsaw-wrapper">
    <div id="container"></div>
    <div class="jigsaw-message">更多使用方式参考  <a href="https://www.npmjs.com/package/jigsaw-captcha-js" target="_blank">npm连接</a>  </div>
  </div>
</template>

<script>
import jigsaw from 'jigsaw-captcha-js';

export default {
  data: () => ({
    x: 0,
    y: 0,
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
  text-align: center;
  padding-top: 100px;
}

.jigsaw-message {
  margin-top:24px;
  font-weight: bold;
  font-size: 20px;
}
</style>
