<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-clork></v-clork>
    <div class="btn" @click="triggerPing">{{ping}}</div>
  </div>
</template>
<script>
import { getPing } from '@/api/demo';
import VClork from '@/components/VClork';

export default {
  data: () => ({
    ping: 'ping'
  }),
  methods: {
    async triggerPing() {
      try {
        this.ping = await getPing();
      } catch (e) {
        this.$log.error(e);
        this.ping = 'oops!!!';
      }
    }
  },
  components: { VClork }
};
</script>
