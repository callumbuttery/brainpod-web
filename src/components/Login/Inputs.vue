<template>
  <div class="inputContainer">
    <v-text-field
      label="Email"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Password"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Inputs',
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
</style>