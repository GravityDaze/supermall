<template>
      <nav-bar class="detail-nav">
        <div slot="center" class="nav-title">
          <div v-for="(item,index) in title" :key="item" @click="titleClick(index)" :class="{active:index===curIndex}">{{item}}</div>
        </div>
      </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    components:{
        NavBar
    },
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            curIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.curIndex=index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
.detail-nav{
    position:relative;
    z-index:99;
    background: #fff;;
}

.nav-title{
    display:flex;
    
 
}

.nav-title>div{
    flex:1
}

</style>