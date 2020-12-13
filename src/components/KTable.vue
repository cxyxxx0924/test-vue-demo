<template>
  <table>
    <tr>
      <slot></slot>
    </tr>
    <tr v-for="item in columDatas" :key="item.date">
      <td v-for="key in columKeys" :key="key">
        {{ item[key] }}
      </td>
      <td><slot name='scope'></slot></td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
      columKeys: [],
      columDatas: [],
    };
  },
  mounted() {
    // console.log('data', JSON.stringify(this.data) );
    this.data.forEach((element) => {
      this.columDatas.push(element.__ob__.value);
    });
    this.columKeys = Object.keys(this.data[0].__ob__.value);
    // this.$on('soltClick', this.soltAdd())
    // console.log('this.data[0]', JSON.stringify(this.data[0].__ob__.value));
  },
  methods: {
    soltWay(way, key) {
      console.log('way', way, 'key', key);
      function sortData(a, b) {
        return way === "sort" ? a[key].localeCompare(b[key]): b[key].localeCompare(a[key]);
      }
      this.columDatas.sort(sortData);
      console.log('sortData', JSON.stringify(this.columDatas));
    },
    handleDelete() {
      console.log('handleDelete');
    },
    deleteItem(item) {
      console.log('item', item)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>