import Toast from './Toast.vue'
const instance = {}
instance.install = function(Vue){
  
    // 创建组件构造器
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor()
    // 挂载组件对象到某一元素上
    toast.$mount(document.createElement('div'))
    // 将元素添加到body中
    document.body.appendChild(toast.$el)
    // 将toast挂载到原型上
    Vue.prototype.$toast = toast

}
export default instance