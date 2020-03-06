<template>
  <nav id="tab-bar" >
    <slot></slot>    
  </nav>
</template>

<script>

export default {

}
</script>

<style scoped>
#tab-bar{
  position:fixed;
  width:100%;
  bottom:0;
  z-index:10;
  display:flex;
  height:49px;
  background: #f6f6f6;
  box-shadow:0 -2px 1px rgba(250,250,250);
}

</style>