import { BrowserRouter } from 'react-router'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { LoginAuthProvider } from './contexts/login/LoginContextProvider'
import { ErrorProvider } from './contexts/error/ErrorProvider'

function App() {

  return (
    <>
      <LoginAuthProvider>
        <ErrorProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </ErrorProvider>
      </LoginAuthProvider>
    </>
  )
}

export default App
