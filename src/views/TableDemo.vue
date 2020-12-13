<template>
  <div>
    <h1>KTable</h1>
    <k-table :data="tableData">
      <k-colum sortable label="日期" prop="date" width="180"></k-colum>
      <k-colum sortable label="姓名" prop="name" width="180"></k-colum>
      <k-colum label="地址" prop="address"></k-colum>
      <k-colum label="操作">
        <!-- <button>删除</button> -->
      </k-colum>
      <template ref="deleteBtn" v-slot:scope>
        <button>删除</button>
      </template>
      <!-- <template ref="deleteBtn" slot-scope="scope">
          <button @click="handleDelete(scope.$index, scope.row)">删除</button>
        </template> -->
    </k-table>
  </div>
</template>

<script>
import KColum from "../components/KColum.vue";
import KTable from "../components/KTable.vue";
export default {
  components: { KTable, KColum },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
</style>