import React from 'react'
import { useRoutes } from 'react-router-dom'
import { publiceRouter } from './router'
export default function App() {
  const elements=useRoutes(publiceRouter)
  return (
    <>{elements}</>
  )
}
