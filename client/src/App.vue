<template>
  <v-app v-on="passData">
    <v-app-bar app color="primary">
      <Controller @effect="setType($event)" />
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <p v-if="effect.type" class="display-3">
              Effect <span class="effect">{{ effect.type }}</span> working now
            </p>
            <p v-else class="display-3">You don't choose any effect!</p>
          </v-col>
        </v-row>
        <v-row justify="space-around" aligin="center">
          <v-col cols="12">
            <v-color-picker
              hide-inputs
              hide-canvas
              v-model="effect.color"
            ></v-color-picker>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <v-slider
              v-model="effect.speed"
              label="Speed"
              thumb-label="always"
              min="1"
              max="100"
            ></v-slider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="10">
            <v-slider
              v-model="effect.brightness"
              thumb-label="always"
              label="Brrightness"
              min="0"
              max="255"
            ></v-slider>
          </v-col>
        </v-row>
        <!-- <v-btn dark @click="effect.on = !effect.on">On/Off</v-btn>
        {{ effect.on }} -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import io from 'socket.io-client';

import Controller from './components/Controller';

export default {
  components: {
    Controller
  },

  data() {
    return {
      socket: {},
      effect: {
        type: '',
        color: {},
        brightness: null,
        speed: ''
        // on: false
      },
      isOn: null
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

<style>
.effect {
  text-decoration: underline;
  color: blue;
}
</style>
