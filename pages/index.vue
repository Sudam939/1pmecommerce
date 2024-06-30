<template>
  <div>
    <section>
      <carousel />
    </section>

    <section class="py-10">
      <v-container>
        <h1>Products</h1>
        <div class="d-flex justify-center ga-5 py-5">
          <v-btn color="purple" @click="productStore.fetchProducts()">All</v-btn>
          
          <div v-for="category in categoryStore.categories" :key="category">
            <v-btn color="purple" @click="productStore.getProductsbyCategory(category)">{{category.name}}</v-btn>
          </div>
        </div>

        <v-row>
          <v-col cols="12" md="4" lg="3" v-for="product in productStore.products" :key="product.id">
            <card :product="product"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useCategoryStore } from "~/stores/category";
import { useProductStore } from "~/stores/product";

const categoryStore = useCategoryStore();
await categoryStore.fetchCategories();

const productStore = useProductStore();
await productStore.fetchProducts();
</script>

<style scoped>
h1 {
  color: purple;
  text-align: center;
  font-size: 32px;
}
</style>