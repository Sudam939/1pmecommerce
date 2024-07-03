<template>
  <div>
    <section>
      <v-container>
        <h1 class="text-center">Cart</h1>
        <v-table class="text-center">
          <thead>
            <tr >
              <th class="text-center">Product Name</th>
              <th class="text-center">Qty</th>
              <th class="text-center">Price</th>
              <th class="text-center">Image</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cart in cartStore.carts" :key="cart">
              <td>{{ cart.product }}</td>
              <td>{{ cart.qty }}</td>
              <td>{{ cart.price }}</td>
              <td>
                <v-img :src="cart.image" height="100"></v-img>
              </td>
              <td>
                <v-btn>Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();
</script>

<style scoped>
</style>