<template>
  <div>
    <h2 v-bind:title="title">{{ title }}</h2>
    <course-list :courses='courses'></course-list>
  </div>
</template>

<script>
import { getCourses } from "@/api/getCourses";
import CourseList from "@/components/CourseList.vue";
export default {
  data() {
    return {
      courses: [],
      title: "开课吧，cart",
    };
  },
  name: 'cart',
  components: {
    CourseList,
  },
  async created() {
    this.courses = await getCourses();
  },
};
</script>

<style lang="scss" scoped>
</style>