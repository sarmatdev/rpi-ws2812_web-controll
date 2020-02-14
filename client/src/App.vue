<template>
  <v-app>
    <v-app-bar app color="primary">
      <Controller @effect="setEffect($event)" />
    </v-app-bar>

    <v-content>
      <v-container>
        <!-- <Picker @color="setColor($event)" /> -->
        <v-color-picker
          hide-inputs
          v-model="effect.color"
          v-on="showColor"
        ></v-color-picker>
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
      color: {},
      effect: {
        color: {}
      }
    };
  },
  created() {
    this.socket = io('http://192.168.1.107:8000');
  },
  methods: {
    setEffect(type) {
      this.effect.type = type;
      this.socket.emit('effect', this.effect);
    },
    setColor() {
      // this.socket.emit('color', color);
      // this.socket.emit('color', this.color.hexa);
    }
    // showColor() {
    //   console.log(this.color.hexa);
    // }
  },
  computed: {
    showColor() {
      return this.socket.emit('color', this.effect.color.hex);
    }
  }
};
</script>
