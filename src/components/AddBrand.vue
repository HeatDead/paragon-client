<template>
  <div class="demo-input-size">
    <el-input
      v-model="brand"
      class="w-50 m-2"
      placeholder="Бренд"
    />
    <el-button @click="addBrand()" type="primary">Добавить</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            brand: ''
        }
    },
    methods: {
        addBrand() {
            axios({
          method: "post",
          url: "http://localhost:8080/cars/brand",
          data: {
            brand: this.brand
          },
        });
        }
    },
}
</script>

<style scoped>
</style>