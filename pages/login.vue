<template>
  <div>
    <section>
      <v-container>
        <h1>Login</h1>
        {{userData}}
        <v-row class="py-5" v-if="authStore.loading == false">
          <v-col cols="12" md="6">
            <v-text-field label="Enter your email" v-model="userData.email" clearable></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Enter your password" v-model="userData.password" clearable></v-text-field>
          </v-col>
        </v-row>

        <v-row class="py-5" v-else>
            loading......
        </v-row>

        <v-btn @click="authStore.login(userData)">Login</v-btn>
      </v-container>
    </section>
  </div>
</template>

<script setup>
const userData = ref({
  email: null,
  password: null,
});
import {useAuthStore} from "~/stores/auth";
const authStore = useAuthStore();
</script>

<style scoped>
</style>