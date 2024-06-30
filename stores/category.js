import { defineStore } from "pinia";
import { axiosApi } from "~/config/axios";
export const useCategoryStore = defineStore('category', {

    state: () => ({
        categories: [],
    }),

    actions: {
        async fetchCategories() {
            try {
                let response = await axiosApi.get("categories");
                if (response.status == 200) {
                    this.categories = response.data.data;
                }
            } catch (e) {
                console.warn(e);
            }
        }
    }

});