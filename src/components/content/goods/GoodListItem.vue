<template>
  <div class="goods-item" @click="go">
      <img v-lazy="showImg" @load="imageLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
  
</template>

<script>
export default {
    props:{
        goodsItem:{
            type:Object
        }
    },

    computed:{

      showImg(){
        return this.goodsItem.image || this.goodsItem.show.img
      }

    },

    methods:{
      imageLoad(){
        this.$bus.$emit('down')
      },
      go(){
        console.log(this.goodsItem)
        // this.$router.push('/detail/'+this.goodsItem.iid)
        this.$router.push({
          path:"/detail",
          query:{
            iid:this.goodsItem.iid
          }

        })
      }


    }
}
</script>

<style>
  .goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    /*在一行显示 如果超出的话 就....*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  /*通过伪元素的形式将星星图片放在收藏数之前*/
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    /* background: url("@/assets/img/common/collect.svg") 0 0/14px 14px; */
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>