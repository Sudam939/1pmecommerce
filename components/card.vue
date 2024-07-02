<template>
  <div>
    <v-card height="410" hover>
      <v-img height="250" cover :src="product.image"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>Rs {{ product.price }}</v-card-subtitle>
      <div class="d-flex ga-5 pa-3 justify-center">
        <v-btn size="small" @click="addQty()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <div>{{ qty }}</div>
        <v-btn size="small" @click="subtractQty()">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </div>
      <div class="pa-2">
        <v-btn
          size="small"
          @click="
            cartStore.postCart({
              qty: qty,
              product_id: product.id,
            })
          "
          >Add to cart</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";
defineProps(["product"]);

const qty = ref(1);

function addQty() {
  if (qty.value !== 10) {
    ++qty.value;
  }
}

function subtractQty() {
  if (qty.value !== 1) {
    --qty.value;
  }
}

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
</style>