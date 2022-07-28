<template>
  <div>
    <FormByJson />
    <TableByForm />
    <div class="button">
      <button @click="clearData()">Clear Data</button>
    </div>
  </div>
</template>

<script>
import FormByJson from "./components/FormByJson.vue";
import TableByForm from "./components/TableByForm.vue";

export default {
  name: "App",
  components: {
    FormByJson,
    TableByForm,
  },
  methods: {
    clearData() {
      console.log("test");
      localStorage.clear();
      console.log(localStorage.length);
    },
  },
};
</script>

<style>
html {
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
