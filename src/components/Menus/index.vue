<template>
  <div v-if="visible">
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

  </div>
</template>

<script>
import { menuRoute } from '@/router';

export default {
  data: () => ({
    menuRoute,
    visible: true
  }),
  methods: {
    selectMenu(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>

</style>
