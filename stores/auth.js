import { defineStore } from "pinia";
import { axiosApi } from "~/config/axios";
export const useAuthStore = defineStore('auth', {

    state: () => ({
        loading: false,
        token: null,
    }),

    actions: {

        getToken() {
            if (typeof window != "undefined") {
                this.token = localStorage.getItem("token");
            }
        },

        async register(data) {
            try {
                this.loading = true;
                let response = await axiosApi.post("register", data);
                if (response.status == 200) {
                    alert("Registered Successful!");
                    navigateTo("/login");
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
            }
        },


        async login(data) {
            try {
                this.loading = true;
                let response = await axiosApi.post("login", data);
                if (response.status == 200) {
                    if (response.data.success == true) {
                        this.token = response.data.token;
                        localStorage.setItem("token", this.token);
                        alert("LoggedIn Successful!");
                        navigateTo("/");
                    } else {
                        alert(response.data.message)
                    }
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            try {
                this.loading = true;
                let response = await axiosApi.get("logout", {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                });
                if (response.status == 200) {
                    if (response.data.success == true) {
                        this.token = null;
                        localStorage.removeItem("token");
                        alert(response.data.message);
                        navigateTo("/");
                    } else {
                        alert("Something went wrong")
                    }
                }
            } catch (e) {
                console.warn(e);
            } finally {
                this.loading = false;
            }
        }
    }

});