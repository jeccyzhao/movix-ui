const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('@/views/discover')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/settings')
  }
]
export default routes
