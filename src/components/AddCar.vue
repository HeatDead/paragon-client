<template>
  <div>
    <el-select v-model="selectedBrand" class="m-2" placeholder="Бренд">
      <el-option
        v-for="brand in brandList"
        :key="brand.id"
        :label="brand.brand"
        :value="brand.id"
      />
    </el-select>
    <el-select
      v-if="selectedBrand != null"
      v-model="selectedModel"
      class="m-2"
      placeholder="Модель"
    >
      <el-option
        v-for="model in modelList"
        :key="model.id"
        :label="model.model"
        :value="model.id"
      />
    </el-select>
    <el-input-number v-model="price" :min="100000" placeholder="Цена"  :max="100000000" @change="handleChange" />
    <el-input v-model="img_url" class="w-50 m-2" placeholder="Адрес картинки" />
    <el-button @click="addModel" type="primary">Добавить</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      brandList: [],
      modelList: [],
      selectedBrand: null,
      prevSelBrand: null,
      selectedModel: null,
    };
  },
  mounted() {
    axios;
    axios.get("http://localhost:8080/cars/brand").then((response) => {
      this.brandList = response.data;
      console.log(this.brandList);
    });
  },
  methods: {},
  watch: {
    selectedBrand() {
      if (this.prevSelBrand != this.selectedBrand) this.selectedModel = null;
      if (this.selectedBrand != null) {
        axios
          .get(
            "http://localhost:8080/cars/model?brand_id=" + this.selectedBrand
          )
          .then((response) => {
            this.modelList = response.data;
            console.log(this.modelList);
          });
        this.prevSelBrand = this.selectedBrand;
      }
    },
  },
};
</script>
