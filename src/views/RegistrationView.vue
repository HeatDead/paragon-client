<template>
  <div class="container">
    <div class="loginPlate">
      <el-form>
        <h1>Регистрация</h1>
        <el-text v-if="loginError" class="loginError" type="danger">{{
          errorMessage
        }}</el-text>
        <el-form-item>
          <el-input v-model="username" placeholder="Введите логин"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="password"
            placeholder="Введите пароль"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="surname"
            placeholder="Введите фамилию"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="name"
            placeholder="Введите имя"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="patronymic"
            placeholder="Введите отчество (необязательно)"
            type="text"
          ></el-input>
        </el-form-item>
        <div class="reglog">
          <el-form-item>
            <el-button type="primary" @click="register"
              >Создать аккаунт</el-button
            >
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
      name: null,
      surname: null,
      patronymic: null,
      loginError: false,
      errorMessage: "",
    };
  },
  methods: {
    register() {
      if (this.username === "" || this.password === "") {
        this.loginError = true;
        this.errorMessage = "Введите логин и пароль";
      } else {
        axios({
          method: "post",
          url: "http://localhost:8081/auth",
          data: {
            username: this.username,
            password: this.password,
            name: this.name,
            surname: this.surname,
            patronymic: this.patronymic,
          },
        });
        axios({
          method: "post",
          url: "http://localhost:8081/auth/token",
          data: {
            username: this.username,
            password: this.password,
          },
        }).then((response) => {
          console.log(response);
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

.el-button {
  width: 100%;
}

.reglog {
  margin-top: 1.2rem;
  width: 100%;
}
</style>
