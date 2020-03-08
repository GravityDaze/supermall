import{
ADD_TO_CART,
ADD_COUNTER
}from './mutation-types'

export default {
[ADD_TO_CART](state,payload){

    payload.count++
    },

[ADD_COUNTER](state,payload){
        state.cartList.push(payload)
    }
}