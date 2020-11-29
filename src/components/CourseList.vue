<template>
  <div>
    <p v-if="courses.length == 0">none</p>
    <div v-else>
      <transition-group name="fade">
        <div
          v-for="c in courses"
          :key="c.name"
          @click="selectCourse = c"
          :style="{
            backgroundColor: selectCourse === c ? '#ddd' : 'transparent',
          }"
        >
          {{ c.name }} - $ {{ c.price }}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectCourse: ''
    }
  },
  props: {
    courses: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>