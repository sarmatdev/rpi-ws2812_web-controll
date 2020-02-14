<template>
  <v-row>
    <v-col cols="12">
      <v-row justify="center" aligin="center">
        <v-color-picker
          mode="hexa"
          v-model="color"
          v-on="showColor()"
        ></v-color-picker>
      </v-row>
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
      // this.$emit('color', this.color.hexa);
      // return this.color.hexa;
    }
  }
};
</script>

<style></style>
