<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" aligin="center">
        <v-color-picker v-model="color"></v-color-picker>
      </v-row>
      {{ showColor() }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      color: {}
    };
  },
  methods: {
    showColor() {
      console.log(this.color.hex);
    }
  }
};
</script>

<style></style>
