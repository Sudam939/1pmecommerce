<template>
  <div>
    <v-card height="400" hover>
      <v-img height="300" cover :src="product.image"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>Rs {{ product.price }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script setup>
defineProps(["product"]);
</script>

<style lang="scss" scoped>
</style>