<script setup>
import AddBrand from "@/components/AddBrand.vue";
import AddModel from "@/components/AddModel.vue";
import DeleteBrand from "@/components/DeleteBrand.vue";
import AddCar from "@/components/AddCar.vue";
</script>

<template>
  <el-row class="tac">
    <el-col :span="4">
      <h5 class="mb-2">Панель управления</h5>
      <el-menu
        class="el-menu-vertical-demo"
        @select="handleOpen"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu :index="1">
          <template #title>
            <span>Автомобили</span>
          </template>
          <el-menu-item-group title="Управление автомобилями">
            <el-menu-item index="2">Добавить</el-menu-item>
            <el-menu-item index="3">Удалить</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Управление брендами">
            <el-menu-item index="4">Добавить</el-menu-item>
            <el-menu-item index="5">Удалить</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Управление моделями">
            <el-menu-item index="6">Добавить</el-menu-item>
            <el-menu-item index="7">Удалить</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="8">
          <span>Пользователи</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="container">
        <AddCar v-if="curPlane == 2" />
      <AddBrand v-if="curPlane == 4" />
      <DeleteBrand v-if="curPlane == 5" />
      <AddModel v-if="curPlane == 6" />
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      curPlane: null,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.curPlane = key;
      console.log(key);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 15px;
}
</style>
