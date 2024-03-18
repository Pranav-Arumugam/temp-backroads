import React from "react"
import { pageLinks, socialLinks } from "../data"

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((links) => {
          const { id, link, text } = links
          return (
            <li key={id}>
              <a href={link} className='footer-link'>
                {text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((links) => {
          const { id, link, iclass } = links
          return (
            <li key={id}>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={iclass}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
