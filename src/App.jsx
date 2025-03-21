import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import Button from './components/Button'
import Exercise02 from './components/pages/Exercise02'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><Exercise02/></>
  )
}

export default App
