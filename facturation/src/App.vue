<template>
  <v-app>
    <AppNavigation></AppNavigation>
    <img class="header" src="./assets/img/TRECOBAT_HEADER.jpg" width="100%" height="70%">
    <v-content transition="slide-x-transition">
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>
