import { defineStore } from "pinia";

export const store = defineStore("store", {
	state: () => ({
		storedData: {},
	}),
	actions: {
		async saveData() {
			console.log("poop");
		},
	},
});
