import { request } from './request'
export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  })
}
export function getHomeGoods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page,
    },
  })
}

export function getSortList() {
  return request({
    url: '/category',
  })
}
export function getSort(i) {
  return request({
    url: '/subcategory',
    params: {
      maitKey:i.maitKey
    }
})
}
