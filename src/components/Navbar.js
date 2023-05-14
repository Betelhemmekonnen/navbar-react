import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../components/images/large.png';
import icon from '../components/images/icons8.png';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <img src={logo} width="80px" height="70px" alt="betty"/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
           <img src={icon}  alt="betty"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar