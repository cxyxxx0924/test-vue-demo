<template>
  <div>
    <input v-model="username" type="text" />
    <button @click="onLoginIn" v-if="!isLogin">loginIn</button>
    <button @click="onLoginOut" v-else>loginOut</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    onLoginIn() {
      this['user/userLogin'](this.username)
      .then(() => {
        this.$router.push(this.$route.query.redirect);
      }).catch(() => {
        alert('username is error');
      });

      // window.isLogin = true;
      // this.$router.addRoutes([
      //   {
      //     path: "/cart"
      //   }
      // ]);
      // const redirect = this.$route.query.redirect || '/';
      // this.$router.push(redirect);
    },
    onLoginOut() {
      // this.$store.user.isLogin = false;
      this['user/userLogout']().then(() => {
        console.log('logout success');
        this.$router.push('/login');
      });
      // this.$store.dispatch('user/userLogout', this.username)
    },
    ...mapActions(['user/userLogin', 'user/userLogout'])
  },
  data() {
    return {
      username: "",
    };
  },
  computed: {
    ...mapState('user', ['isLogin']),
    
  },
};
</script>

<style lang="scss" scoped>
</style>