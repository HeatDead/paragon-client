<template>
  <div class="container">
    <div class="loginPlate">
      <el-form>
        <h1>Вход</h1>
        <el-text v-if="loginError" class="loginError" type="danger">{{
          errorMessage
        }}</el-text>
        <el-form-item label="Логин">
          <el-input v-model="username" placeholder="Введите логин"></el-input>
        </el-form-item>
        <el-form-item label="Пароль">
          <el-input
            v-model="password"
            placeholder="Введите пароль"
            type="password"
          ></el-input>
        </el-form-item>
        <div class="reglog">
          <el-form-item>
            <RouterLink to="/register"
              ><el-button type="primary" link
                >Создать аккаунт</el-button
              ></RouterLink
            >
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Войти</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      loginError: false,
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (this.username === "" || this.password === "") {
        this.loginError = true;
        this.errorMessage = "Введите логин и пароль";
      } else {
        axios({
          method: "post",
          url: "http://localhost:8081/auth/token",
          data: {
            username: this.username,
            password: this.password,
          },
        }).then((response) => {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          window.location.href = "/";
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 80%;
  display: flex;
  justify-content: center;
}
.loginPlate {
  background-color: rgb(53, 53, 53);
  border-radius: 10px;
  width: 500px;
  margin: auto auto;
}
form h1 {
  margin-bottom: 2rem;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
}

.reglog {
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
}

.loginError {
  margin-bottom: 2rem;
}
</style>
