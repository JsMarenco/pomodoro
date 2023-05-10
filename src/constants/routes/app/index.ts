/**
 * All the app routes
 */
const appRoutes = {
  home: '/',
  stats: {
    index: '/stats',
  },
  settings: {
    index: '/settings',
    account: '/settings/account',
    socialAccounts: '/settings/account/social',
    profileSettings: '/settings/account/profile',
  },
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
  },
  room: {
    create: '/room/create',
    join: (roomId: string) => `/room/join/${roomId}`,
    view: (roomId: string) => `/room/view/${roomId}`,
  },
}

export default appRoutes
