<template>
  <h1>{{ car.model.brand.brand }} {{ car.model.model }}</h1>
  <img :src="car.img_url" alt="" />
  <strong>{{ car.price }}</strong>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      carId: this.$route.params.id,
      car: null,
    };
  },
  methods: {
    carInfo() {
      axios
        .get(`http://localhost:8080/cars/id?id=${this.carId}`)
        .then((response) => {
          this.car = response.data;
          console.log(this.car);
        });
      console.log(this.carId);
    },
  },
  beforeMount() {
    this.carInfo();
  },
};
</script>


<style scoped>
img {
    width: 400px;
    height: 400px;
}
</style>