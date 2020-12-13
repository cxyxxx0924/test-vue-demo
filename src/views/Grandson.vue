<template>
  <div @click="$emit('click-some', 'msg from grandson')">
    <p>{{$attrs.username}}</p>
    <p>{{$attrs.password}}</p>
    <p>{{foo}}</p>
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    inject: ['foo']
  }
</script>

<style lang="scss" scoped>

</style>