import React from 'react'
import Card from '../Card'
import List from '../List'
import Button from '../Button'

export default function Exercise02() {
  return (
    <div><h1 className="bg-blue-500">Components</h1>
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
    </div></div>
  )
}
