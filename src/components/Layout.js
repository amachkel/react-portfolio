import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Hamburger from './Hamburger'
import '../assets/styles/index.scss'

export default function Layout() {
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      <Sidebar open={open} setOpen={setOpen} />
      <Hamburger open={open} setOpen={setOpen} />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}
