import virus from './virus'
import sky6 from './sky6'
export default {
  path: '/SGT',
  name: 'Sgt',
  meta: {
    roles: ['admin', 'editor', 'test'],
    title: '安全工具',
    icon: 'try',
    keepAlive: true
  },
  component: () => import('../../components/Layout'),
  children: [virus, sky6]
}
