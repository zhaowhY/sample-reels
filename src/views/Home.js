// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import VClork from '@/components/VClork.vue';
import track from '@/directives/track';

export default {
  name: 'home',
  directives: { track },
  components: {
    HelloWorld, VClork
  }
};
