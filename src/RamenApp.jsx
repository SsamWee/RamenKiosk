import { RamenProvider } from './context/RamenProvider'
import { AppRouter } from './router/AppRouter'

export const RamenApp = () => {

  return (
    <>
      <RamenProvider>
        <AppRouter />
      </RamenProvider>
    </>


  )
}

