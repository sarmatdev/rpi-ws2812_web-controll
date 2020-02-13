<template>
  <div>
    <button @click="effect('plain')">Plain Color</button>
    <button @click="effect('rainbow')">Rainbow</button>
    <button @click="effect('iterate')">Iterate</button>
    <button @click="effect('sandbox')">Sanbox</button>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return {
      socket: {}
    };
  },
  created() {
    this.socket = io('http://192.168.1.107:8000');
  },
  methods: {
    effect(type) {
      this.socket.emit('effect', type);
    }
  }
};
</script>

<style></style>
