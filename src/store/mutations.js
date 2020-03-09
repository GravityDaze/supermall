import {
    ADD_TO_CART,
    ADD_COUNTER
} from './mutation-types'

export default {
    [ADD_TO_CART](state, payload) {

        state.cartList.push(payload)
        payload.isCheck=true
        payload.count = 1
    },

    [ADD_COUNTER](state, payload) {
        payload.count += 1
    }
}