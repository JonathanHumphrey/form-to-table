<script setup>
import FormSchema from "../assets/FormSchema.json";
import { store } from "@/stores/data";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const { storedData } = storeToRefs(store());
const { deleteStorage } = store();

const myJson = FormSchema;

const clearData = () => {
  deleteStorage();
};

onMounted(() => {});
</script>

<template>
  <div class="loading" v-if="storedData.length === 0">
    <h1>Enter Entries Above</h1>
  </div>
  <div class="table-wrapper" v-else>
    <table>
      <thead>
        <th v-for="field in myJson" :key="field.id">
          {{ field.fieldName }}
        </th>
      </thead>
      <tbody v-for="(object, i) in storedData" :key="i">
        <td>
          {{ object.fName }}
        </td>
        <td>
          {{ object.lName }}
        </td>
        <td class="email-field">
          {{ object.email }}
        </td>
        <td>
          {{ object.city }}
        </td>
        <td>
          {{ object.state }}
        </td>
      </tbody>
    </table>
    <div class="button">
      <button @click="clearData()">Clear Data</button>
    </div>
  </div>
</template>

<style>
h1 {
  color: white;
}
.table-wrapper {
  background-color: #21c2f8;
  border-radius: 1rem;
  margin: auto;
  margin-top: 2rem;
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
  text-align: left;
  width: 75%;
}
button {
  width: 5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  margin-top: 1rem;
  background-color: #7f8c8d;
}
button:hover {
  background-color: #f3f7f8;
}
td {
  text-align: left;
  
}
</style>