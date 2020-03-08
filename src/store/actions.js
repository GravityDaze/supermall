import{
  ADD_TO_CART,
  ADD_COUNTER
  }from './mutation-types'
export default {

    addCart(context,payload){
        const hadGoods = context.cartList.find( (item)=> item.iid===payload.iid )
        if(hadGoods){
          context.commit( ADD_COUNTER , hadGoods)
        }else{
          context.commit( ADD_TO_CART , payload)
        }
      }
}