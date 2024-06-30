import { defineStore } from "pinia";
import { axiosApi } from "~/config/axios";
export const useProductStore = defineStore('product', {

    state: () => ({
        products: [],
    }),

    actions: {
        async fetchProducts() {
            try {
                let response = await axiosApi.get("products");
                if (response.status == 200) {
                    this.products = response.data.data;
                }
            } catch (e) {
                console.warn(e);
            }
        },

        getProductsbyCategory(category){
            this.products = category.products;
        }
    }

});