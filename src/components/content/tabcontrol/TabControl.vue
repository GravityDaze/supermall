<template>
  <div class="tabcontrol">
    <div v-for="(v,i) in titles" :key="i" :class="{active:i===currentIndex}" @click="tabClick(i)">
      <span>{{v}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
.tabcontrol {
  display: flex;
  background:#fff;
}

.tabcontrol > div {
  flex: 1;
  text-align: center;
  line-height: 40px;
}

.tabcontrol > div span{
 padding:5px;
}


.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>