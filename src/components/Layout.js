import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Hamburger from './Hamburger'
import '../assets/styles/index.scss'

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <Hamburger />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}
