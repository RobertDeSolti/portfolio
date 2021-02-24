import React from 'react'
import PropTypes from 'prop-types'

import './header.scss'

// setup vars

const links = [
  { id: 1, url: '#perfection', name: 'Articles' },

  { id: 2, url: '#toplist', name: 'Locations' },

  { id: 3, url: '#videos', name: 'Videos' },

  { id: 4, url: '#signin', name: 'Sign in' },
];

export const Header = ({statement ,  onClick , ...rest}) => {
  return (
    <div className='section-wrapper'>
      <div className='section-wrapper__logo'>
        <a href={rest.href} className='link'>
          <img
            src='img/svg/turpol-logo_sm.svg'
            alt='logo'
            className='link__svg'
          />
        </a>
      </div>
      <nav className='section-wrapper__menu'>
        <MenuList />
      </nav>
    </div>
  )
};

const MenuList = () => {
  return (
    <ul className='list'>
      {links.map((link) => {
        return <MenuLink key={link.id} {...link}></MenuLink>
      })}
    </ul>
  );
}

const MenuLink = (props) => {
  const { url , name } = props;
  return (
    <li className='list__item'>
      <a href={url} className='links'>
        {name}
      </a>
    </li>
  )
}

export default Header;

Header.propTypes = {
  statement: PropTypes.bool,
  onClick: PropTypes.func,
};

Header.defaultProps = {
  statement: true,
  onClick: undefined,
};
