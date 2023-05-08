import Layout from '@/layout'
export default {
  path: '/employees',
  name: 'employees',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/employees'),
    meta: {
      title: '高级管理',
      icon: 'el-icon-collection'
    }
  }]
}
