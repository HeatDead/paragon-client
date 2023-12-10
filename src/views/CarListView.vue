<template>
  <div class="carList">
    <div class="carCard" v-for="car in carList">
      <img :src="car.img_url" alt="" />
      <div class="midCard">
        <div class="heading">
          <b>{{ car.model.brand.brand }} {{ car.model.model }}</b>
          <p v-if="car.condition == 'NEW'" style="color: rgb(0, 207, 0);">НОВЫЙ</p>
          <p v-if="car.condition == 'USED'" style="color: yellow;">Б/У</p>
        </div>
        <div class="lowCard">
          <p>{{ car.price }} руб.</p>
          <router-link :to="{ path: '/carInfo/' + car.id }" class="nav-link"
            ><el-button type="primary">Подробнее</el-button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      carList: [],
    };
  },
  mounted() {
    axios;
    axios.get("http://localhost:8080/cars").then((response) => {
      this.carList = response.data;
    });
  },
  methods: {
    seeCar(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.carList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}

b {
  font-size: 25px;
  margin: 15px;
}

.carCard {
  display: inline-flex;
  width: 80%;
  height: 250px;
  background-color: rgb(53, 53, 53);
  border-radius: 10px;
  overflow: hidden;
}

.midCard {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.lowCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.lowCard button {
  margin: 15px;
}
.heading {
    display: inline-flex;
}
</style>
