<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  name: "KForm",
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: { type: Object },
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter((item) => item.prop)
        .map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(false))
        .catch(() => cb(true));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>