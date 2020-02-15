<template>
  <v-container fluid>
    <v-row justify="space-around" aligin="center">
      <v-col cols="12">
        <v-btn dark @click="effect('plain')">Plain Color</v-btn>
        <v-btn dark @click="effect('rainbow')">Rainbow</v-btn>
        <v-btn dark @click="effect('iterate')">Iterate</v-btn>
        <v-btn dark @click="effect('sandbox')">Sanbox</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    effect(type) {
      this.$emit('effect', type);
    }
  }
};
</script>

<style></style>
