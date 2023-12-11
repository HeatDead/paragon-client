<template>
  <div class="demo-input-size">
    <el-select v-model="selectedBrand" class="m-2" placeholder="Бренд">
      <el-option
        v-for="brand in brandList"
        :key="brand.id"
        :label="brand.brand"
        :value="brand.id"
      />
    </el-select>
    <el-input v-model="model" class="w-50 m-2" placeholder="Модель" />
    <el-button @click="addModel" type="primary">Добавить</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      brandList: [],
      selectedBrand: null,
      model: ''
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
    addModel() {
      axios({
        method: "post",
        url: "http://localhost:8080/cars/model",
        data: {
          brand_id: this.selectedBrand,
          model: this.model
        },
      });
    },
  },
};
</script>
