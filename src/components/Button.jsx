import React from 'react'

export default function Button({title, onClick, enabled}) {
    let style = enabled ? "bg-green-400" : "bg-gray-400";
  return (
    <div>{title}</div>
    
  )
}