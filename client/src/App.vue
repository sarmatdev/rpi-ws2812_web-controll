<template>
  <v-app v-on="passData">
    <v-app-bar app color="primary">
      <Controller @effect="setType($event)" />
    </v-app-bar>

    <v-content>
      <v-container>
        <!-- <Picker @color="setColor($event)" /> -->
        <v-color-picker
          hide-inputs
          hide-canvas
          v-model="effect.color"
        ></v-color-picker>
        <v-slider
          v-model="effect.brightness"
          thumb-label="always"
          min="0"
          max="255"
        ></v-slider>
        <v-slider
          v-model="effect.speed"
          thumb-label="always"
          min="1"
          max="1000"
        ></v-slider>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import io from 'socket.io-client';

import Controller from './components/Controller';
// import Picker from './components/Picker';

export default {
  components: {
    Controller
    // Picker
  },

  data() {
    return {
      socket: {},
      effect: {
        type: '',
        color: {},
        brightness: null,
        speed: ''
      }
    };
  },
  created() {
    this.socket = io('http://192.168.1.107:8000');
  },
  mounted() {},
  methods: {
    setType(type) {
      this.effect.type = type;
    }
  },
  computed: {
    passData() {
      return this.socket.emit('effect', this.effect);
    }
  }
};
</script>
