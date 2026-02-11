import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Template1 from './components/pages/template1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Template1/>
    </>
  )
}

export default App
