<template>
  <div>
    <h1>{{total}}</h1>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
import io from 'socket.io-client';
var socket = io('http://localhost:3000')

export default {
 name: 'SlideShow',
 data() {
   return {
     total: 0,
   }
 },
 methods: {
   // handle action dari element2, dan kirim ke server
   add() {
     socket.emit('add', this.total);
   },
   subtract() {
     socket.emit('subtract', this.total);
   }
 },
 created(){
  // tangkep semua emit dari server
   socket.on('add', (newTotal) => {
     this.total = newTotal;
   });

   socket.on('subtract', (newTotal) => {
     this.total = newTotal;
   });
 }
}
</script>

<style scoped>
</style>
