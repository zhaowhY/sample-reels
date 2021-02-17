<template>
  <div
    v-if="visible"
    class="menu-wrapper"
  >
    <h1 style="color: #67C23A;margin: 16px">Vue项目</h1>
    <el-button
      style="margin: 8px"
      type="primary"
      @click="visible = false"
    >隐藏左侧导航栏</el-button>
    <el-menu
      default-active="/3d-rotate"
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

    <h2 style="color: #67C23A;margin: 16px">外链项目</h2>
    <el-menu @select="skipToLink">
      <el-menu-item
        :index="route.path"
        v-for="route of externalLinks"
        :key="route.path"
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
    visible: true
  }),
  methods: {
    selectMenu(path) {
      this.$router.push(path);
    },
    skipToLink(path) {
      window.open(path, '_blank');
    }
  }
};
</script>

<style lang="less" scoped>
.menu-wrapper {
  max-height: 100vh;
  overflow: auto;
}
</style>
