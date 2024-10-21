import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AllRoutes } from '@/routes'
import Loading from '@/components/Loading'

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
