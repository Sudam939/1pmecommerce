import { defineStore } from "pinia";
import { axiosApi } from "~/config/axios";
export const useCartStore = defineStore('cart', {

    state: () => ({
        carts: [],
    }),

    actions: {
        async postCart(cartData) {
            try {
                let response = await axiosApi.post("add_cart", cartData, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (response.status == 200) {
                    if (response.data.data.success == true) {
                        alert(response.data.data.message)
                        window.location.reload();
                    }
                }
            } catch (e) {
                console.warn(e);
            }
        }
    }

});