import { BrowserRouter } from 'react-router'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { LoginAuthProvider } from './contexts/login/LoginContextProvider'

function App() {

  return (
    <>
      <LoginAuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </LoginAuthProvider>
    </>
  )
}

export default App
