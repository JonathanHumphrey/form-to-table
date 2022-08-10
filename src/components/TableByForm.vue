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

// Table data to CSV conversion and subsequent download solution pulled from
// URL: https://www.geeksforgeeks.org/how-to-export-html-table-to-csv-using-javascript/
const tableToCSV = () => {
  // Variable to store the final csv data
  var csv_data = [];

  // Get each row data
  var rows = document.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    // Get each column data
    var cols = rows[i].querySelectorAll("td, th");
    // Stores each csv row data
    var csvrow = [];
    for (var j = 0; j < cols.length; j++) {
      // Get the text data of each cell
      // of a row and push it to csvrow
      csvrow.push(cols[j].innerHTML);
    }
    // Combine each column value with comma
    csv_data.push(csvrow.join(","));
  }
  // Combine each row data with new line character
  csv_data = csv_data.join("\n");
  // Call this function to download csv file
  downloadCSVFile(csv_data);
};
const downloadCSVFile = (csv_data) => {
  // Create CSV file object and feed
  // our csv_data into it
  let CSVFile = new Blob([csv_data], {
    type: "text/csv",
  });
  // Create to temporary link to initiate
  // download process
  var temp_link = document.createElement("a");

  // Download csv file
  temp_link.download = "GfG.csv";
  var url = window.URL.createObjectURL(CSVFile);
  temp_link.href = url;

  // This link should not be displayed
  temp_link.style.display = "none";
  document.body.appendChild(temp_link);

  // Automatically click the link to
  // trigger download
  temp_link.click();
  document.body.removeChild(temp_link);
};

onMounted(() => {});
</script>

<template>
  <div class="loading" v-if="storedData.length === 0">
    <h1>Enter Entries Above</h1>
  </div>
  <div class="table-wrapper" v-else>
    <table>
      <tr>
        <th v-for="field in myJson" :key="field.id">
          {{ field.fieldName }}
        </th>
      </tr>
      <tr v-for="(object, i) in storedData" :key="i">
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
      </tr>
    </table>
    <div class="button">
      <button @click="clearData()">Clear Data</button>
      <button @click="tableToCSV()">Download CSV</button>
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
  box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
    0 0 0.8rem #21c2f8, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
}
.button {
  display: flex;
  justify-content: center;
}
table {
  width: 60rem;
  table-layout: auto;
  border-collapse: collapse;
  height: 1rem;
  margin: auto;
}
tr {
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
  margin: 2rem;
}
button:hover {
  background-color: #f3f7f8;
}
td {
  text-align: left;
}
</style>