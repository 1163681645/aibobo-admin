import Layout from '@/layout'
export default {
  path: '/approvals',
  name: 'approvals',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/approvals'),
    meta: {
      title: '直播间配置',
      icon: 'el-icon-video-camera-solid'
    }
  }]
}
