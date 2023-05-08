import request from '@/utils/request'
// 获取形象列表
export function Postimagelist(data) {
  return request({
    url: '/webapi/LiveSetting/getVisual',
    method: 'POST',
    data
  })
}
