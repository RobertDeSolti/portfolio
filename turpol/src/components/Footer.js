import React from 'react'
import { linkData } from '../js/massive'
import './footer.scss'

export const Footer = ({ response, ...rest }) => {
  return (
    <div className='section-inner'>
      <FooterLogo {...rest} />
      <Menu />
    </div>
  )
}

const FooterLogo = () => {
  return (
    <div className='section-footer__logo'>
      <img src='img/svg/turpol-logo_lrg.svg' alt='logo' className='picture' />
    </div>
  )
}

const Menu = () => {
  return (
    <div className='section-footer__nav'>
      {linkData.map((links, idx) => {
        return <Column key={idx} {...links} />
      })}
    </div>
  )
}

const Column = (props) => {
  const { tittle, info } = props
  return (
    <div className='nav-column'>
      <div className='nav-column__tittle'>{tittle}</div>
      <ul className='nav-column__chapters'>
        <>
          {info.map((link, idx) => {
            return <Link key={idx} {...link} />
          })}
        </>
      </ul>
    </div>
  )
}

const Link = (props) => {
  const { href, name } = props
  return (
    <li className='items'>
      <a href={href} className='items__link'>
        {name}
      </a>
    </li>
  )
}

export default Footer
