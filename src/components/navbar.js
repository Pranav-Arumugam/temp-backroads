import React from "react"
import logo from "../images/logo.svg"
import { pageLinks, socialLinks } from "../data"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((links) => {
            const { id, link, text } = links
            return (
              <li key={id}>
                <a href={link} className='nav-link'>
                  {" "}
                  {text}{" "}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((links) => {
            const { id, link, target, dclass, iclass } = links
            return (
              <li key={id}>
                <a
                  href={link}
                  target={target}
                  className={dclass}
                  rel='noopener'
                >
                  <i className={iclass}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
