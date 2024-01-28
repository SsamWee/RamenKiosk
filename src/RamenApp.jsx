import { AppProvider } from './context/AppProvider'
import { AppRouter } from './router/AppRouter'

export const RamenApp = () => {

  return (
    <>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </>


  )
}

