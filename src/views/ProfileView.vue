<template>
<h1>{{ name }} {{ surname }}</h1>
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