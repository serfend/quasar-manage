export default {
  path: 'sky6',
  name: 'sky6',
  meta: {
    roles: ['admin', 'editor', 'test'],
    title: '天擎数据同步',
    icon: 'img:icons/sky6/qianxin.svg',
    keepAlive: true
  },
  component: () => import('../../../pages/sky6')
}
