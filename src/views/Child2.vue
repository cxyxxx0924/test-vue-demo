<template>
  <div>
    <Grandson v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Grandson from './Grandson.vue'
  export default {
    components: {
      Grandson,
    },
    inheritAttrs: false
  }
</script>

<style lang="scss" scoped>

</style>