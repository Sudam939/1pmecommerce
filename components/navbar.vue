<template>
  <div>
    <section class="pb-16">
      <v-app-bar title="Ecommerce" color="purple">
        <v-btn to="/">Home</v-btn>
        <v-btn class="bg-yellow" to="/register" v-if="authStore.token == null">Register</v-btn>
        <v-btn class="bg-red" v-else @click="authStore.logout()">Logout</v-btn>
      </v-app-bar>
    </section>
  </div>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth";
const authStore = useAuthStore();
</script>

<style scoped>
</style>