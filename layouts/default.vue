<template>
    <v-app class="bg-purple-lighten-5">
        <header>
            <navbar/>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer></footer>
    </v-app>
</template>

<script setup>
import {useAuthStore} from "~/stores/auth";
const authStore = useAuthStore();
authStore.getToken();

import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
await cartStore.fetchCarts();
</script>

<style scoped>

</style>