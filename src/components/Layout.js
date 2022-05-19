import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Hamburger from 'hamburger-react'
import BurgerMenu from './BurgerMenu'
import '../assets/styles/index.scss'

export default function Layout() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="App">
      <Sidebar />
      <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}
