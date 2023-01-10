<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
