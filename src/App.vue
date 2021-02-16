<template>
  <div
    id="app"
    class="app-wrapper"
  >

    <Menus class="app-menus" />
    <router-view />
  </div>
</template>

<script>
import Menus from '@/components/Menus/index.vue';

export default {
  data: () => ({}),
  components: { Menus },
};
</script>

<style lang="less" scoped>
.app-wrapper {
  display: flex;

  .app-menus {
    width: 220px;
  }
}
</style>
