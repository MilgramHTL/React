import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import List from './components/List'
import Button from './components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500">Components</h1>
      <div className="flex">
      </div>
      <div>
        <List items={["Coffee", "Tea", "Beer"]} />
      </div>
      <div>
        <Button title="Clicked" enabled={true}/>
      </div>
      <div>
        <Card name={"John Doe"} jobtitle={"Software Engineer"} description={"I am a software engineer"} />
      </div>
    </>
  )
}

export default App
