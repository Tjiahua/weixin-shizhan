import request from './netword.js'


export function getMultiData() {
  return request({
    url:'/home/multidata'

  })
}