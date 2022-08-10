import { defineStore } from "pinia";

export const store = defineStore({
	id: "data",
	state: () => ({
		storedData: [],
		showModal: false
	}),
	getters: {},
	actions: {
		updateStoredData(data) {
			this.storedData.push(data)
			console.log(this.storedData[0]);
			//localStorage.setItem("data", JSON.stringify(this.storedData));
		},
		deleteStorage(){
			this.storedData = []
		}
		},
});
