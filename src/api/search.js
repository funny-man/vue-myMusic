import { commonParams, options } from './jsonp-data-config'
import Jsonp from 'common/js/jsonp'
// import axios from 'axios'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return Jsonp(url, data, options)
}

export function search(key, page, zhida) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParams, {
    w: key,
    p: page,
    catZhida: zhida ? 1 : 0,
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    aggr: 0,
    flag: 1,
    ie: 'utf-8',
    n: 20,
    perpage: 20,
    remoteplace: 'txt.mqq.all',
    sem: 1,
    t: 0,
    zhidaqu: 1
  })
  return Jsonp(url, data, options)
}