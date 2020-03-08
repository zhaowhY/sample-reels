<template>
  <div class="wrapper">
    <img :src="milkywayImg" alt class="milkywayImg">
    <img :src="globeGif" alt class="globelGif">
    <div class="zoetrope-wrapper">
      <div
        :class="['zoetrope',rotateName]"
        ref="zoetrope"
        @mouseleave="mouseleave"
        @mouseenter="mouseenter"
      >
        <div
          v-for="(item, index) of governments"
          :key="index"
          @click="showSelf(index,item)"
          @mouseenter="mouseenterSingle"
        >
          <p class="item-title">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import milkywayImg from '@/assets/image_milkyway@2x.png';
import globeGif from '@/assets/globe.gif';

export default {
  data: () => ({
    milkywayImg,
    globeGif,
    isRotate: true,
    rotateName: 'rotateInit',
    nowIndex: -1,
    timer: null,
    overSingle: false,
    governments: [
      {
        name: '我是1号'
      },
      {
        name: '我是2号'
      },
      {
        name: '我是3号'
      },
      {
        name: '我是4号'
      },
      {
        name: '我是5号'
      },
      {
        name: '我是6号'
      },
      {
        name: '我是7号'
      }
    ]
  }),
  methods: {
    showSelf(index) {
      if (this.nowIndex !== index) {
        this.isRotate = true;
      }
      const unitSum = 7;
      const unit = 360 / unitSum;
      if (this.isRotate) {
        this.rotateName = `rotate${index + 1}`;
        this.$refs.zoetrope.style.transform = `rotateY(${unit *
          (unitSum - index)}deg)`;
        this.isRotate = false;
        this.nowIndex = index;
      }
    },
    mouseenter() {
      clearTimeout(this.timer);
    },
    mouseenterSingle() {
      this.overSingle = true;
    },
    mouseleave() {
      if (this.timer) {
        this.isRotate = false;
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.rotateName = 'rotateInit';
        if (!this.overSingle) {
          this.isRotate = true;
        }
      }, 1000);
    }
  }
};
</script>


<style lang="stylus" scoped src="./index.styl">
</style>
