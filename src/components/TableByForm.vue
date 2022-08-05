<script setup>
import FormSchema from "../assets/FormSchema.json";
import { store } from "@/stores/data";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const { storedData } = storeToRefs(store());

const myJson = FormSchema;
onMounted(() => {});
</script>

<template>
  <div class="loading" v-if="!storedData">
    <h1>LOADING...</h1>
  </div>
  <div class="table-wrapper" v-else>
    <table>
      <thead>
        <th v-for="field in myJson" :key="field.id">
          {{ field.fieldName }}
        </th>
      </thead>
      <tbody v-for="(object, i) in storedData" :key="i">
        <td >
          {{ object.fName }} 
        </td>
        <td>
          {{ object.lName }}
        </td>
        <td>
          {{ object.email}}
        </td>
        <td>
          {{ object.city}}
        </td>
        <td>
          {{ object.state}}
        </td>
      </tbody>
    </table>
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