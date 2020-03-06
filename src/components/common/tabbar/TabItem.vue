<template>
      <div class="tab-item" :style="activeStyle" @click="itemClick" :class="{active:isActive}">
         <slot name="item-icon"></slot>
         <slot name="item-text"></slot>
      </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:"red"
        }
    },
    data(){
        return{}
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1 
        },
        activeStyle(){
            return this.isActive? {color:this.activeColor} : {} 
        }
    }
    ,
    methods:{
        itemClick(){
            console.log("哈哈哈")
            console.log(this.$route.path,this.path)
            if(this.$route.path !== this.path){
                this.$router.push(this.path)
            }
        }
    }



}
</script>

<style>
.tab-item{
  flex:1;
  text-align:center;
}

.tab-item img{
    width:30px;
    vertical-align: middle;
}

.tab-text{
    font-size:14px;
}

.active{
    color:red
}
</style>