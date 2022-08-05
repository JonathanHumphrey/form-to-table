<script setup>
//Imports the JSON file with the given parameters from the assets folder
import FormSchema from "../assets/FormSchema.json";
import { store } from "@/stores/data";
//import { onBeforeMount } from "vue";

const myJson = FormSchema;
let formData = {};
const { updateStoredData } = store();

/* onBeforeMount(() => {
  myJson.map((resp) => {
    formData = { ...formData, [resp.fieldName]: resp.value };
  });
}); */
// First pass solution as this is fucking WEIRD, idk why the console isn't printing from the data.js state function. I am just going to leave this as is for now.
const submitData = (event) => {
  event.preventDefault();
  let dataBlob = {
    fName: '',
    lName:'',
    email: '',
    city: '',
    state: ''
  }

  dataBlob.fName = event.target[0].value;
  dataBlob.lName = event.target[1].value;
  dataBlob.email = event.target[2].value;
  dataBlob.city = event.target[3].value;
  dataBlob.state = event.target[4].value;
  
  clearForm(event);
  /* localStorage.setItem("data", JSON.stringify(formData));
  console.log(JSON.parse(localStorage.getItem("data")));
*/
  console.log(dataBlob)
  updateStoredData(dataBlob);
};

//Simple function to clear the form without a refreh using default
const clearForm = (event) => {
event.target[0].value = ''
event.target[1].value = ''
event.target[2].value = ''
event.target[3].value = ''
event.target[4].value = ''
}
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