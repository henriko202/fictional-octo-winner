import React from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/Shared/ErrorPage'
import { getDefaultLayout } from './components/Shared/Layout'
import HomePage from './components/Home'

type ComponentWithLayout = React.ComponentType<any> & {
  getLayout?: typeof getDefaultLayout
}

interface CustomRouteObject extends Omit<RouteObject, 'Component' | 'element' | 'errorElement'> {
  Component: ComponentWithLayout
}

export const routerObjects: CustomRouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    const { Component, ...rest } = router
    const getLayout = Component.getLayout || getDefaultLayout
    const page = getLayout(<Component />)

    const route: RouteObject = {
      ...rest,
      element: page,
      errorElement: <ErrorPage />,
      index: false,
    }

    return route
  })

  return createHashRouter(routeWrappers)
}
