import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutation-types'
export default {

  addCart(context, payload) {
    return new Promise(resolve => {
      
      const hadGoods = context.state.cartList.find((item) => item.iid === payload.iid)
      if (hadGoods) {
        context.commit(ADD_COUNTER, hadGoods)
        resolve("商品加一")
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve("添加商品")
      }
    })

  }
}