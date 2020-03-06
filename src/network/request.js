import axios from 'axios'

export function request(config){

    const instance =axios.create({
        // 创建axios实例
        baseURL:'http://123.207.32.32:8000/api/wh',
        timeout:5000
    })

    // axios拦截器
    instance.interceptors.request.use(config => {


        return config
    },err=>{
        console.log(err)
    })

    // 发送网络请求
    return instance(config)

}