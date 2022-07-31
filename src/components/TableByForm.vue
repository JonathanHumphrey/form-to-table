<template>
  <div class="loading" v-if="!storedData.City">
    <h1>LOADING...</h1>
  </div>
  <div class="table-wrapper" v-else>
    <table>
      <thead>
        <th v-for="field in myJson" :key="field.id">
          {{ field.fieldName }}
        </th>
      </thead>
      <tbody>
        <td v-for="(item, i) in storedData" :key="i">
          {{ item }}
        </td>
      </tbody>
    </table>
  </div>
</template>
<script>
import FormSchema from "../assets/FormSchema.json";

export default {
  data() {
    return {
      myJson: FormSchema,
      storedData: {},
    };
  },
};
</script>
<style>
h1 {
  color: white;
}
.table-wrapper {
  background-color: #21c2f8;
  border-radius: 1rem;
  margin: auto;
  width: 75rem;
  padding: 1rem;
}

table {
  width: 60rem;
  table-layout: auto;
  border-collapse: collapse;
  height: 1rem;
  margin: auto;
}
thead {
  border-bottom: solid black 0.1rem;
  width: 75%;
}
</style>