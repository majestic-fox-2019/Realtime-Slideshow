<template>
  <div>
    <img :src="'images/'+ total +'.jpg'">

    <div class="content">
      <button @click="subtract">Prev Slide</button>
      <button @click="add">Next Slide</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
var socket = io('http://localhost:3000')

export default {
 name: 'SlideShow',
 data() {
   return {
     total: 1,
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
     if (newTotal >= 0) {      
       this.total = newTotal;
     }
   });
 }
}
</script>
<style>
  html,body{
      margin:0;
      max-height:100%;
      overflow: hidden;
      color: white;
  }

  img{
    display:block;
    width:100%; 
    height:100%;
    object-fit: cover;
  }

  .content{
    position: absolute;
    bottom: 5%;
    left: 45%;
  }
</style>
