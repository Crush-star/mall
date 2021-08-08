import { request } from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class mainDetail{
  constructor(res) {
     this.swiperImage = res.result.itemInfo.topImages
     this.title = res.result.skuInfo.title
     this.columns = res.result.columns
     this.desc = res.result.itemInfo.desc 
     this.newPrice = res.result.itemInfo.price 
     this.oldPrice = res.result.itemInfo.oldPrice
     this.realPrice = res.result.itemInfo.lowNowPrice
     this.discount = res.result.itemInfo.discountDesc
     this.services = res.result.shopInfo.services
     this.shopInfo = res.result.shopInfo
     this.detailInfo = res.result.detailInfo
  }
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}