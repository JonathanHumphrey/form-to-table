import { defineStore } from "pinia";

export const store = defineStore({
	id: "data",
	state: () => ({
		storedData: {},
	}),
	getters: {},
	actions: {
		updateStoredData(data) {
			localStorage.setItem("data", JSON.stringify(data));
			this.storedData = data;
			console.log(this.storedData);
		},
	},
});
