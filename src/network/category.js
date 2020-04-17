import {request} from './request'

export function getGoods(index){
  return request({
    url:'/category/'+index,
  })
}