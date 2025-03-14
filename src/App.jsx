import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import List from './components/List'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500">Hello Leander</h1>
      <div className="flex">
      <Card name={"John Doe"} jobtitle={"Software Engineer"} description={"I am a software engineer"} />
      <Card name={"Jane Doe"} jobtitle={"Software Engineer"} description={"I am a software engineer"} />
      </div>
      <div>
        <List items={["Coffee", "Tea", "Beer"]} />
      </div>
      test
    </>
  )
}

export default App
