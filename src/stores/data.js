import { defineStore } from "pinia";

export const store = defineStore({
	id: "data",
	state: () => ({
		storedData: {},
	}),
	getters: {},
	actions: {
		updateStoredData(data) {
			console.log(data);
			this.storedData = data;
			console.log(this.storedData);
			localStorage.setItem("data", JSON.stringify(this.storedData));
		},
	},
});
