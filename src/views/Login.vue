<template>
  <div>
    <button @click="onLoginIn" v-if="!isLogin">loginIn</button>
    <button @click="onLoginOut" v-else>loginOut</button>

    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item prop="username" label="用户名">
        <k-input-cmp v-model="model.username" placeholder="请输入账号" />
      </k-form-item>
      <k-form-item prop="password" label="密码">
        <k-input-cmp
          v-model="model.password"
          placeholder="请输入密码"
          type="password"
        />
      </k-form-item>
      <k-form-item>
        <button @deleteItem="loginKForm">login!</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import KForm from "../components/KForm.vue";
import KFormItem from "../components/KFormItem.vue";
import KInputCmp from "../components/KInputCmp.vue";
import create from "../components/create";
import Notice from "../components/Notice.vue";
export default {
  components: {
    KInputCmp,
    KFormItem,
    KForm,
  },
  provide() {
    return { foo: "fooo" };
  },
  methods: {
    onLoginIn() {
      this["user/userLogin"](this.username)
        .then(() => {
          this.$router.push(this.$route.query.redirect);
        })
        .catch(() => {
          alert("username is error");
        });
    },
    onClickSome() {
      alert("click some");
    },
    onLoginOut() {
      // this.$store.user.isLogin = false;
      this["user/userLogout"]().then(() => {
        console.log("logout success");
        this.$router.push("/login");
      });
      // this.$store.dispatch('user/userLogout', this.username)
    },
    loginKForm() {
      // console.log(this.$refs.form1);
      this.$refs.loginForm.validate((error) => {
        const notice = create(Notice, {
          title: "杨哥让你来搬砖",
          message: error ? "校验失败" : "请求登陆",
          duration: 3000
        });
        notice.show();
      });
    },
    ...mapActions(["user/userLogin", "user/userLogout"]),
  },
  data() {
    return {
      model: { password: "", username: "" },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  computed: {
    ...mapState("user", ["isLogin"]),
  },
};
</script>

<style lang="scss" scoped>
</style>