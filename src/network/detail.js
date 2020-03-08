import {request} from './request'

// 根据iid获取商品信息
export function getGoodsInfo(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

// 根据iid获取推荐商品
export function getRecommend(){
    return request({
        url:'/recommend',
    })
}

export class Goods{
    constructor(itemInfo , columns,services){
        this.title=itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

// 店铺数据
export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
    }
  }
  
  // 尺寸数据
  export class GoodsParams {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }
