<template>
  <div class="inputContainer">
    <v-text-field
      label="Email"
      hide-details="auto"
      v-model="email"
    ></v-text-field>
    <v-text-field label="Password" v-model="password"></v-text-field>
    <div class="buttonsContainer">
      <v-btn class="buttons" elevation="2" color="primary" @click="attemptLogin">Login</v-btn>
      <v-btn class="buttons" elevation="2" color="secondary">Register</v-btn>
    </div>
  </div>
</template>

<script>
import sha256 from 'crypto-js/sha256';
import axios from 'axios';
export default {
  name: 'Form',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  watch: {
      email: function(val) {
        console.log(val);
        this.email = val.toLowerCase();
      },
      password: function(val) {
        console.log(val);
        this.password = val;
      },
    },
  methods: {
    attemptLogin(){
      const hashPassword = hashPassword(this.password);
    }, 
    attemptRegistation(){
      const hashPassword = hashPassword(this.password);

      axios.post('/auth/register', {
        email: this.email,
        password: hashPassword,
      })
    },
    }
    hashPassword(password){
      return sha256(password + process.env.VUE_APP_SALT).toString();
    },
  }
};
</script>

<style>
.inputContainer {
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}

.input {
  width: 100%;
}

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