<template>
  <div class="home">
    <img alt="Vue logo" :src="`${publicPath}assets/logo.png`" />
    <p>{{ welcome }}</p>
    <HelloWorld class="red" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    // welcome() {
    //   const wel = this.$store.getters.user.welcome;
    //   console.log(`run welcome -> ${wel}`);
    //   return wel;
    // },
    ...mapGetters({
      welcome: 'user/welcome'
    })
  },
};
</script>