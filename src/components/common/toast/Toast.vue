<template>
  <div class="toast" v-show="isShow">
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {

    data(){
        return{
            isShow:false,
            message:''
        }
    },

    methods:{

        show(msg="默认文字",duration=2000){
            this.isShow = true
            this.message = msg
            setTimeout( ()=>{
                this.isShow=false
            },duration)
        }
    }
}
</script>

<style>

.toast{
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    margin:auto;
    background: rgba(0,0,0,0.5);
    z-index:9999;
}

.toast p{
    padding:5px 20px;
    color:#fff;
}

</style>