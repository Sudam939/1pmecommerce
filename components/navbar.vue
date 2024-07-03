<template>
  <div>
    <section class="pb-16">
      <v-app-bar title="Ecommerce" color="purple">
        <div class="d-flex ga-3">
          <v-btn to="/">Home</v-btn>
          <v-btn to="/cart"> Cart <span class="cart">{{cartStore.carts.length}}</span> </v-btn>
          <v-btn class="bg-yellow" to="/register" v-if="authStore.token == null"
            >Register</v-btn
          >
          <v-btn class="bg-red" v-else @click="authStore.logout()"
            >Logout</v-btn
          >
        </div>
      </v-app-bar>
    </section>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
</script>

<style scoped>
.cart{
  font-size: 10px;
  position: relative;
  bottom: 10px;
  color: yellow;
}
</style>