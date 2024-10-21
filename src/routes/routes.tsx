import { Navigate, Route, Routes } from 'react-router-dom'

import { PrivateRoutes, PublicRoutes, privateRoutes, publicRoutes } from '@/routes'

const Private = () => {
  return (
    <Routes>
      <Route path={PrivateRoutes.PRIVATE} element={<Navigate to={PrivateRoutes.USERS} />} />
      {privateRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
      <Route path='*' element={<>PAGE NOT FOUND</>} />
    </Routes>
  )
}

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={PublicRoutes.LOGIN} />} />
      {publicRoutes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
      <Route path='/*' element={<Private />} />
    </Routes>
  )
}
