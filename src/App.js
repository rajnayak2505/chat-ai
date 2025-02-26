import React from 'react'
import Login from './components/Auth/Login'
import ContextProvider from './context/Context'

const App = (props) => {
  return (
    <>
    <ContextProvider>
      <Login/>
    </ContextProvider>
    </>
  )
}

export default App