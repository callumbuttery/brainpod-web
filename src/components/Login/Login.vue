<template>
  <v-card elevation="2" class="justify-center container">
    <v-card-title class="justify-center">
      <span class="text-center headline">Login</span>
    </v-card-title>
    <Form/>
  </v-card>
</template>

<script>

import Form from "@/components/Login/Form.vue";
export default {
  name: "Login",
  components: {
    Form
  },
  mounted() {
    this.$store.dispatch("getHash");
  },
};
</script>

<style>
</style>
