export default {
  path: 'virus',
  name: 'virus',
  meta: {
    roles: ['admin', 'editor', 'test'],
    title: '病毒实时监控',
    icon: 'coronavirus',
    keepAlive: true
  },
  component: () => import('../../../pages/home')
}
