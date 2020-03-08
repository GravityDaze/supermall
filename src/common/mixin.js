import { debounce } from '../utils/util'

export const itemListener = {
    data() {
        return {
            itemListener: null
        }
    },
    mounted() {

        // 对监听的事件进行保存
        this.itemListener = debounce(this.refresh, 50)

        this.$bus.$on("down", () => {
            this.itemListener()
        });
        console.log("我是混入的内容")

    },
    methods: {
        // 刷新高度
        refresh() {
            this.$refs.scroll.scroll.refresh();
        },


    },

}

export const backTopOption = {
    
    data(){
        return{
            isShow: false,
        }
    },

    methods:{
          // 回到顶部
    back() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
    }

}