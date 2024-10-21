import { createElement, lazy } from 'react'

export enum PrivateRoutes {
  PRIVATE = '/private',
  USERS = PrivateRoutes.PRIVATE + '/users',
  USERS_CREATE = PrivateRoutes.USERS + '/create',
}

const UsersPage = lazy(() => import('@/pages/private/users/Users'))
const FormUserPage = lazy(() => import('@/pages/private/users/Form-User'))

interface Route {
  path: string
  element: JSX.Element | JSX.Element[]
}

export const privateRoutes: Route[] = [
  {
    path: PrivateRoutes.USERS,
    element: createElement(UsersPage)
  },
  {
    path: PrivateRoutes.USERS_CREATE,
    element: createElement(FormUserPage)
  },
]
