<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array
    }
  }
};
</script>

<style scoped>
.recommend{
    display:flex;
    text-align:center;
    flex:1;
    padding:10px;
    border-bottom:8px solid #f6f6f6;
}

.recommend img{
   max-width:80%;
   margin-bottom:10px;
}


</style>