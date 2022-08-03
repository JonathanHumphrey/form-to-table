<script setup>
//Imports the JSON file with the given parameters from the assets folder
import FormSchema from "../assets/FormSchema.json";
import { store } from "@/stores/data";
import { onBeforeMount } from "vue";

const myJson = FormSchema;
let formData = {};
const { updateStoredData } = store();

onBeforeMount(() => {
  myJson.map((resp) => {
    formData = { ...formData, [resp.fieldName]: resp.value };
  });
});
// First pass solution as this is fucking WEIRD, idk why the console isn't printing from the data.js state function. I am just going to leave this as is for now.
const submitData = (event) => {
  event.preventDefault();

  formData["First Name"] = event.target[0].value;
  formData["Last Name"] = event.target[1].value;
  formData.Email = event.target[2].value;
  formData.City = event.target[3].value;
  formData.State = event.target[4].value;

  /* localStorage.setItem("data", JSON.stringify(formData));
  console.log(JSON.parse(localStorage.getItem("data")));
*/
  console.log(formData);

  updateStoredData(formData);
};
</script>

<template>
  <div class="form-wrapper">
    <form @submit.prevent="submitData($event)">
      <div class="form-data" v-for="data in myJson" v-bind:key="data.id">
        <label class="form-label"> {{ data.fieldName }} </label>
        <input
          :type="data.type"
          v-model="formData[data.fieldName]"
          :placeholder="data.placeholder"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>



<style scoped>
.form-wrapper {
  border-radius: 2rem;
  padding: 1rem;
  background-color: #7f8c8d;
  width: 25rem;
  margin: auto;
}
.form-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eceef0;
}
.form-label {
  align-self: flex-start;
}
input {
  width: 15rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
}
button {
  width: 5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  margin-top: 1rem;
  background-color: #21c2f8;
}
button:hover {
  background-color: #f3f7f8;
}
</style>