<template>
  <div>
    <!-- <input :value="value" @input="onInput" v-bind="$attrs"  /> -->
    <input :value="value" @input="onInput" v-bind="$attrs" :type="type" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value) //双向绑定
      this.$parent.$emit('validate')
    }
  },
  mounted () {
    console.log('props', this.$props);
  },
  
};
</script>

<style lang="scss" scoped>
</style>