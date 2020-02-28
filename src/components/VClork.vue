<template>
  <h2>{{currentTime | timeformat('YYYY-MM-DD HH:mm:ss')}}</h2>
</template>
<script>
import { mapState } from 'vuex';
import timeformat from '@/filters/timeformat';

export default {
  computed: mapState({
    currentTime: state => state.currentTime
  }),
  filters: { timeformat }
};
</script>
