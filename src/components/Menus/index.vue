<template>
  <div
    v-if="visible"
    class="menu-wrapper"
  >

    <h1 style="color: #67C23A;margin: 16px">Vue作品集</h1>
    <h4 style="color: #1890ff; margin:0px 16px 8px;  cursor: pointer" @click="openPage('https://kongkong99.github.io/react-sample-reels/')">
      React作品集连接
    </h4>

    <el-button
      style="margin: 8px 16px"
      type="primary"
      size="mini"
      @click="visible = false"
    >隐藏左侧导航栏</el-button>
    <el-menu
      :default-active="$route.path"
      @select="selectMenu"
    >
      <el-menu-item
        :index="route.path"
        v-for="route of menuRoute"
        :key="route.path"
      >
        <span slot="title">{{route.name}}</span>
      </el-menu-item>
    </el-menu>

    <h2 style="color: #67C23A;margin: 16px">Vue外链项目</h2>
    <el-menu @select="openPage">
      <el-menu-item
        :index="route.path"
        v-for="(route,index) of externalLinks"
        :key="index"
      >
        <span slot="title">{{route.name}}</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
import { menuRoute, externalLinks } from '@/router';

export default {
  data: () => ({
    menuRoute,
    externalLinks,
    visible: true,
  }),
  methods: {
    selectMenu(path) {
      this.$router.push(path);
    },
    openPage(path) {
      window.open(path, '_blank');
    },
  }
};
</script>

<style lang="less" scoped>
.menu-wrapper {
  max-height: 100vh;
  overflow: auto;
}
</style>

<style lang="less">
.menu-wrapper {
      /*定义滚动条高宽及背景
    高宽分别对应横竖滚动条的尺寸*/
    &::-webkit-scrollbar
    {
      width:5px;
      background: hsla(0,0%,59.2%,.23);
      box-sizing: border-box;
    }
    /*定义滚动条轨道
    内阴影+圆角*/
    &::-webkit-scrollbar-track
    {
      background: #fff;
    }
    /*定义滑块
    内阴影+圆角*/
    &::-webkit-scrollbar-thumb
    {
      border-radius: 30px;
      background-color:rgba(144,147,153,.3);
    }
}

</style>
