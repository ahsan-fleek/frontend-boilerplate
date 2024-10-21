import { createElement, lazy } from 'react'

export enum PublicRoutes {
  LANDING = '/',
  NOT_FOUND = '/not-found',
  LOGIN = '/login'
}

const LoginPage = lazy(() => import('@/pages/login/Login'))

interface Route {
  path: string
  element: JSX.Element | JSX.Element[]
}

export const publicRoutes: Route[] = [
  {
    path: PublicRoutes.LOGIN,
    element: createElement(LoginPage)
  }
]
