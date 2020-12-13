<template>
  <th>
    {{ label }}
    <div v-if="typeof sortable == 'string'" v-bind="$attrs">
      <button @click='soltClick'>递增</button><button @click='resoltClick'>递减</button>
    </div>
  </th>
</template>

<script>
export default {
  props: {
    prop: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: "",
    },
    sortable: {},
  },
  methods: {
    soltClick() {
      this.$parent.soltWay('sort',this.prop)
    },
    resoltClick() {
      this.$parent.soltWay('resort',this.prop)
      // this.$emit('resoltClick', this.label)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>