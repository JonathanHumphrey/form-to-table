<template>
  <div class="form-wrapper">
    <form>
      <div class="form-data" v-for="data in myJson" v-bind:key="data.id">
        <label class="form-label"> {{ data.fieldName }} </label>
        <input
          :type="data.type"
          v-model="formData[data.fieldName]"
          :placeholder="data.placeholder"
        />
      </div>
      <button type="submit" @click="submitData($event)">Submit</button>
    </form>
  </div>
</template>

<script>
//Imports the JSON file with the given parameters from the assets folder
import FormSchema from "../assets/FormSchema.json";
import { mapState } from "pinia";
import { store } from "../stores/data";

export default {
  data() {
    return {
      myJson: FormSchema,
      formData: {},
    };
  },
  created: function () {
    this.myJson.map(
      (resp) =>
        (this.formData = { ...this.formData, [resp.fieldName]: resp.value })
    );
  },
  methods: {
    submitData(event) {
      event.preventDefault();

      if (!localStorage.getItem("data")) {
        localStorage.setItem("data", JSON.stringify(this.formData));
      }
      this.storedData = JSON.parse(localStorage.getItem("data"));
      console.log(this.storedData);
      console.log(localStorage);
      store.saveData();
    },
  },
  computed: {
    ...mapState(store, ["storedData"]),
  },
};
</script>

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