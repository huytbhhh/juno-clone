import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routers } from './router'


function App() {

  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
