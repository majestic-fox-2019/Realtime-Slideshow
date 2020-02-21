<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slideIndex"
      controls
      indicators
      :interval="0"
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
    >
      <!-- Text slidesList with image -->
      <b-carousel-slide
        :caption="item.name"
        :img-src="item.image_url"
        v-for="(item, i) in slidesList"
        :key="i"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    slidesList: [],
    slideIndex: 0
  }),
  sockets: {
    connect() {
      console.log("socket connected");
    },
    slideIndex(val) {
      this.slideIndex = val;
    }
  },
  methods: {
    onSlideStart(slide) {
      this.$socket.emit("slideIndex", slide);
    }
  },
  mounted() {
    this.$http
      .get("/")
      .then(res => {
        this.slidesList = res.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style>
#carousel-1 {
  width: 100vw;
}
</style>