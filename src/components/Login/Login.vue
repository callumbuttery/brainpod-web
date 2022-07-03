<template>
  <v-card elevation="2" class="justify-center container">
    <v-card-title class="justify-center">
      <span class="text-center headline">Login</span>
    </v-card-title>
    <Inputs/>
    <div class="buttonsContainer">
      <v-btn class="buttons" elevation="2" color="primary" @click="attemptLogin">Login</v-btn>
      <v-btn class="buttons" elevation="2" color="secondary">Register</v-btn>
    </div>
  </v-card>
</template>

<script>

import Inputs from "@/components/Login/Inputs.vue";
export default {
  name: "Login",
  components: {
    Inputs
  },
  methods: {
    attemptLogin(){
      console.log('hitting login');
    }
  }
};
</script>

<style>
.container {
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}

.buttonsContainer{
  margin-left: 35%;
}

.buttons{
  margin: 10px;
}
</style>
