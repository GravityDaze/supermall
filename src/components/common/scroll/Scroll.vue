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
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad
      });

      this.scroll.on("scroll", pos => {
        this.$emit('scroll',pos)
      });

      this.scroll.on("pullingUp",()=>{
        this.$emit('pullingUp')
      })

    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style>
</style>