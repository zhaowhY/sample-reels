<template>
  <div class="round">
    <img src="@/assets/圆周运动相关知识.png" alt="" :style="{width: '800px'}">
    <div class="round_wrapper">
      <div
        class="round__circle"
        :style="{transform: `translate(${x}px, ${y}px)`}"
      ></div>
    </div>
  </div>
</template>

<script>
const RDDIUS = 175;
let animationNum = 0;
export default {
  data: () => ({
    x: 0,
    y: 0
  }),
  mounted() {
    this.initAnimation();
  },
  methods: {
    // 圆周运动
    initAnimation() {
      setInterval(() => {
        const x = Math.sin(animationNum * Math.PI / 180) * RDDIUS;
        const y = Math.cos(animationNum * Math.PI / 180) * RDDIUS;
        this.x = x;
        this.y = y;
        animationNum += 1;
      }, 20);
    }
  }
};
</script>

<style lang="stylus" scoped>
.round {
  display: flex;
  height: 90%;
  align-items: center;
  justify-content: center;
}

.round_wrapper {
  margin: 0 auto;
  width: 500px;
  height: 500px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.round__circle {
  width: 50px;
  height: 50px;
  background: green;
  border-radius: 50%;
}
</style>
