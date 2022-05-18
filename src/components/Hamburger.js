import { React } from 'react'
import BurgerMenu from './BurgerMenu'

export default function Hamburger({ open, setOpen }) {
  console.log(open)
  return (
    <div>
      {!open ? (
        <div>
          <button
            open={open}
            onClick={() => setOpen(!open)}
            className="hamburger responsive-burger"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      ) : (
        <BurgerMenu open={open} setOpen={setOpen} />
      )}
    </div>
  )
}
