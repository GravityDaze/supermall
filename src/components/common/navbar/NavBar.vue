<template>
  <nav>
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
 nav{
     display:flex;
     line-height:44px;
     height:44px;
     box-shadow:0 1px 1px rgba(0,0,0,.1)
 }

 .left,.right{
     width:60px;
 }

 .center{
     text-align:center;
     flex:1;
 }




</style>