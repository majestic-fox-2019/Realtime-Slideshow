<template>
  <div>
    <img :src="'images/'+ total +'.jpg'">
    <div class="text">
      <pre>{{arrText[total-1]}}</pre>
    </div>
    <div class="content">
      <button v-if="total > 1" @click="subtract">
        <img class="arrow" :src="'images/arrow-left.png'" />
      </button>
      <button v-if="total < 10" @click="add">
        <img class="arrow" :src="'images/arrow-right.png'" />
      </button>
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
     total: localStorage.idxSlide || 1,
     arrText: [
       "5 Langkah membuat socket.io",
       "1. Install socket.io (untuk sisi server) dengan npm",
       "2. Install socket.io-client (untuk sisi server)",
       "3. Setting server",
       `
        const app       = require('express')();
        const server    = require('http').createServer(app);
        const io        = require('socket.io')(server);

        io.on('connection', client => {
          client.on('add', data => {
              // kirim ke semua client yang terhubung
              io.emit('add', data + 1); 
          });
        });
        server.listen(3000, () => {
            console.log(server listening on port ${3000});
        });       
       `,
       "4. Setting Client",
       `
          methods: {
            add() {
              socket.emit('add', this.total);
            },
          },
          created(){
            socket.on('add', (newTotal) => {
              if (newTotal <= 10) {
                this.total = newTotal;
              }
            });
          }       
       `,
       "5. Ngupi...",
       "6. DAN JANGAN LUPA BAHAGIA... Slide tearkhir, buat nganga...!!!"
     ]
   }
 },
 methods: {
   // handle action dari element2, dan kirim ke server
   add() {
     socket.emit('add', this.$store.state.idxSlide);
   },
   subtract() {
     socket.emit('subtract', this.$store.state.idxSlide);
   }
 },
 created(){
  // tangkep semua emit dari server
   socket.on('add', (newTotal) => {
     if (newTotal <= 10) {
       this.total = newTotal;
       this.$store.commit('updateSlide', newTotal);
     }
   });

   socket.on('subtract', (newTotal) => {
     if (newTotal >= 1) {      
       this.total = newTotal;
       this.$store.commit('updateSlide', newTotal);
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

  .arrow {
    height: 5vh;
    width: 5vw;
  }

  .text{
    position: absolute;
    top: 20%;
    left: 10%;
    font-size: 20pt;
  }
</style>
