<template>
  <header>
    <a href="/" id="logo"><h1>PARAGON</h1></a>
    <RouterLink to="/"
          ><el-button type="plain" link>Каталог</el-button></RouterLink
        >
    <nav>
      <RouterLink v-if="!token" to="/login"
        ><el-button type="primary">Войти</el-button></RouterLink
      >
      <div class="logged" v-if="token">
        <RouterLink to="/profile"
          ><el-button type="plain" link>{{ name }} {{ surname }}</el-button></RouterLink
        >
        <RouterLink v-if="role=='ADMIN'" to="/admin"
          ><el-button type="primary">Администрирование</el-button></RouterLink
        >
        <el-button @click="logout" type="primary">Выйти</el-button>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: localStorage.token,
      name: null,
      surname: null,
      role: null,
    };
  },
  methods: {
    getAccountInfo() {
      axios
        .get("http://localhost:8081/account", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response);
          this.name = response.data.name;
          this.surname = response.data.surname;
          this.role = response.data.role;
        });
    },
    logout() {
      localStorage.removeItem("token");
      window.location.href = "/";
    },
  },
  beforeMount() {
    this.getAccountInfo();
  },
};
</script>

<style scoped>
#logo {
  color: white;
  text-decoration: none;
}

.logged {
  display: inline-flex;
}

header {
  background-color: rgb(53, 53, 53);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
