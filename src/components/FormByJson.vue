<script setup>
//Imports the JSON file with the given parameters from the assets folder
import FormSchema from "../assets/FormSchema.json";
import PopoutModal from "./PopoutModal.vue";
import { store } from "@/stores/data";
import { storeToRefs } from "pinia";
//import { onBeforeMount } from "vue";

const myJson = FormSchema;
let formData = {};

let { showModal } = storeToRefs(store());
const { updateStoredData } = store();
const { displayModal } = store();

// First pass solution as this is fucking WEIRD, idk why the console isn't printing from the data.js state function. I am just going to leave this as is for now.
const submitData = (event) => {
  event.preventDefault();
  let dataBlob = {
    fName: "",
    lName: "",
    email: "",
    city: "",
    state: "",
  };

  dataBlob.fName = event.target[0].value;
  dataBlob.lName = event.target[1].value;
  dataBlob.email = event.target[2].value;
  dataBlob.city = event.target[3].value;
  dataBlob.state = event.target[4].value;

  for (const item in dataBlob) {
    dataBlob[item] = dataBlob[item].toLowerCase();
    dataBlob[item] =
      dataBlob[item][0].toUpperCase() + dataBlob[item].substring(1);
    console.log(dataBlob[item]);
  }

  clearForm(event);
  /* localStorage.setItem("data", JSON.stringify(formData));
  console.log(JSON.parse(localStorage.getItem("data")));
*/
  console.log(dataBlob);
  updateStoredData(dataBlob);
};

//Simple function to clear the form without a refreh using default
const clearForm = (event) => {
  event.target[0].value = "";
  event.target[1].value = "";
  event.target[2].value = "";
  event.target[3].value = "";
  event.target[4].value = "";
};

const toggleShow = () => {
  displayModal();
};
</script>

<template>
  <div class="form-wrapper">
    <div class="info">
      <p @mouseover="toggleShow()" @mouseleave="toggleShow()">*</p>
    </div>
    <div class="modal" v-show="showModal">
      <PopoutModal />
    </div>
    <form @submit.prevent="submitData($event)">
      <div class="form-data" v-for="data in myJson" v-bind:key="data.id">
        <label class="form-label"> {{ data.fieldName }} </label>
        <input
          :type="data.type"
          v-model="formData[data.fieldName]"
          :placeholder="data.placeholder"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>



<style scoped>
.form-wrapper {
  position: relative;
  border-radius: 2rem;
  padding: 1rem;
  background-color: #7f8c8d;
  width: 25rem;
  margin: auto;
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
    0 0 0.4rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 0.8rem #21c2f8;
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
.info {
  width: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.modal {
  position: absolute;
  right: -22rem;
  background-color: #7f8c8d;
  border-radius: 3rem;
}
p {
  color: white;
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