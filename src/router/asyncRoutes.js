import sgt from './SGT'
/**
 * Routes that require authorized access
 */
const asyncRoutesChildren = [
  {
    path: '/',
    name: 'home',
    meta: {
      roles: ['admin', 'editor', 'test'],
      title: '主页',
      icon: 'home',
      keepAlive: true
    },
    component: () => import('../pages/home')
  },
  sgt,
  {
    path: '/start',
    name: 'start',
    meta: {
      roles: ['admin', 'editor'],
      title: '快速起步',
      icon: 'design_services',
      keepAlive: true
    },
    component: () => import('../components/Layout'),
    children: [
      {
        path: 'getting-started',
        name: 'getting-started',
        meta: {
          roles: ['admin', 'editor'],
          title: '基础配置',
          icon: 'tune',
          keepAlive: true
        },
        component: () => import('../pages/router/getting-started')
      },
      {
        path: 'router-config',
        name: 'router-config',
        meta: {
          roles: ['admin', 'editor'],
          title: '路由配置',
          icon: 'multiple_stop',
          keepAlive: true
        },
        component: () => import('../pages/router/router-config')
      },
      {
        path: 'my-menu',
        name: 'my-menu',
        meta: {
          roles: ['admin', 'test'],
          title: '关于菜单',
          icon: 'menu',
          keepAlive: true
        },
        component: () => import('../pages/router/my-menu')
      }
    ]
  },
  {
    path: '/optimization',
    name: 'optimization',
    meta: {
      roles: ['admin'],
      title: '性能优化',
      icon: 'memory'
    },
    component: () => import('../components/Layout'),
    children: [
      {
        path: 'VolumeOptimization',
        name: 'VolumeOptimization',
        meta: {
          roles: ['admin', 'editor'],
          title: '体积优化',
          icon: 'miscellaneous_services',
          keepAlive: true
        },
        component: () => import('../pages/optimization/VolumeOptimization')
      },
      {
        path: 'renderOptimization',
        name: 'renderOptimization',
        meta: {
          roles: ['admin', 'editor'],
          title: '渲染性能优化',
          icon: 'flip',
          keepAlive: true
        },
        component: () => import('../pages/optimization/renderOptimization')
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('../components/Layout'),
    meta: {
      roles: ['admin'],
      title: '组件说明',
      icon: 'apps',
      isOpen: true,
      isHidden: false
    },
    children: [
      {
        path: 'keep-alive-doc',
        name: 'keep-alive-doc',
        meta: {
          roles: ['admin', 'editor'],
          title: 'keep-alive 缓存',
          icon: 'select_all',
          keepAlive: true
        },
        component: () => import('../pages/components/keep-alive-doc')
      },
      {
        path: 'scrollDemo',
        name: 'scrollDemo',
        meta: {
          roles: ['admin', 'editor'],
          title: '滚动区域',
          icon: 'swap_vert',
          keepAlive: true
        },
        component: () => import('../pages/components/scrollDemo')
      },
      {
        path: 'tagViewDemo',
        name: 'tagViewDemo',
        meta: {
          roles: ['admin', 'editor'],
          title: 'tagView',
          icon: 'exit_to_app',
          keepAlive: true
        },
        component: () => import('../pages/components/tagViewDemo')
      },
      {
        path: 'breadcrumbsDemo',
        name: 'breadcrumbsDemo',
        meta: {
          roles: ['admin', 'editor'],
          title: '面包屑',
          icon: 'clear_all',
          keepAlive: true,
          isHidden: false
        },
        component: () => import('../pages/components/breadCrumbsDemo')
      },
      {
        path: 'icon',
        name: 'icon',
        meta: {
          roles: ['admin', 'editor'],
          title: 'icon 集合',
          icon: 'grain',
          keepAlive: true
        },
        component: () => import('../pages/components/icon')
      },
      {
        path: 'loading-bar',
        name: 'loading-bar',
        meta: {
          roles: ['admin', 'test'],
          title: 'loading-bar',
          icon: 'rotate_right',
          keepAlive: true
        },
        component: () => import('../pages/components/loading-bar')
      },
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          roles: ['admin', 'test'],
          title: 'markdown',
          icon: 'edit_road',
          keepAlive: true
        },
        component: () => import('../pages/components/markdown')
      },
      {
        path: 'json',
        name: 'json',
        meta: {
          roles: ['admin', 'test'],
          title: 'json',
          icon: 'settings_ethernet',
          keepAlive: true
        },
        component: () => import('../pages/components/json')
      }
    ]
  },
  {
    path: '/axios',
    name: 'axios',
    meta: {
      roles: ['admin', 'editor'],
      title: 'axios',
      icon: 'http',
      keepAlive: true
    },
    component: () => import('../pages/axios/axios.vue')
  },
  {
    path: '/my-lottie',
    name: 'my-lottie',
    meta: {
      roles: ['admin', 'editor'],
      title: 'lottie 动效',
      itemLabel: 'MY SHARE',
      icon: 'videocam',
      keepAlive: true
    },
    component: () => import('../pages/lottie')
  },
  {
    path: '/tableDetail',
    name: 'tableDetail',
    meta: {
      roles: ['admin', 'editor'],
      title: 'Treats 详情',
      icon: 'blur_linear',
      isHidden: true
    },
    component: () => import('../pages/home/tableDetail')
  },
  {
    path: '*', // This must be placed at the bottom
    redirect: '/NoFound404',
    meta: {
      roles: ['admin', 'test'],
      isHidden: true
    }
  }
]

const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    redirect: '/',
    component: () => import('../layouts/MainLayout'),
    meta: {
      // index routing does not participate in permission filtering,
      // so there is no need to set permissions
      // roles: ['admin', 'editor', 'test']
    },
    children: asyncRoutesChildren
  }
]

export default asyncRoutes
