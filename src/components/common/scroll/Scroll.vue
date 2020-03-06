<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        probeType:this.probeType
      });
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    }
  },
  props:{
      probeType:{
          type:Number,
          default:1
      }
  }
};
</script>

<style>
</style>