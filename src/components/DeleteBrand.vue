<template>
  <el-table :data="brandList" style="width: 100%">
    <el-table-column prop="id" label="ID" width="50" />
    <el-table-column prop="brand" label="Брэнд" width="120" />
    <el-table-column fixed="right" label="Операции" width="180">
      <template #default>
        <el-button link type="primary" size="small"
          >Изменить</el-button
        >
        <el-button link type="primary" size="small">Удалить</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      brandList: [],
    };
  },
  mounted() {
    axios;
    axios.get("http://localhost:8080/cars/brand").then((response) => {
      this.brandList = response.data;
      console.log(this.brandList);
    });
  },
  methods: {

  },
};
</script>