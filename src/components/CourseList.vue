<template>
  <div>
    <p v-if="courses.length == 0">none</p>
    <div v-else>
      <transition-group name="fade">
        <div
          v-for="c in courses"
          :key="c.name"
          @click="onClick(c)"
          :style="{
            backgroundColor: selectCourse === c ? '#ddd' : 'transparent',
          }"
        >
          {{ c.name }} - $ {{ c.price }}
          <!-- <router-link :to="`/cart/${c.name}`">
          {{ c.name }} - $ {{ c.price }}
        </router-link> -->
        </div>
      </transition-group>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectCourse: "",
    };
  },
  name:'coursesList',
  watch: {
    route: {
      immediate: true,
      deep: true,
      handler() {
        console.log(`$route is change`);
      },
    },
  },
  methods: {
    onClick(c) {
      this.selectCourse = c;
      this.$router.push(`/cart/${c.name}`);
    },
  },
  props: {
    courses: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>