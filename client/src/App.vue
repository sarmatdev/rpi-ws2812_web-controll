<template>
  <v-app>
    <v-app-bar app color="primary">
      <Controller v-on:effect="setEffect($event)" />
    </v-app-bar>

    <v-container>
      <Picker />
    </v-container>
  </v-app>
</template>

<script>
import io from 'socket.io-client';

import Controller from './components/Controller';
import Picker from './components/Picker';

export default {
  components: {
    Controller,
    Picker
  },

  data() {
    return {
      socket: {}
    };
  },
  created() {
    this.socket = io('http://192.168.1.107:8000');
  },
  methods: {
    setEffect(type) {
      console.log(type)
      this.socket.emit('effect', type);
    }
  }
};
</script>
