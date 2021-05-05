/* eslint-disable no-dupe-keys */
/* eslint-disable no-sequences */
/*eslint no-undef: "error"*/
import PropTypes from 'prop-types';
import React from 'react';
import {linkData} from '../js/massive'
import './footer.scss'

export const Footer = ({response, ...rest}) => {
	return (
		<div className='section-inner'>
			<FooterLogo {...rest}/>
			<Menu />
		</div>
	)
};

const FooterLogo = () => {
	return(
		<div className='section-footer__logo'>
			<img src='img/svg/turpol-logo_lrg.svg' alt='logo' className='picture' />
		</div>
	)
};

const Menu = () => {
	return (
		<div className='section-footer__nav'>
		{linkData.map((links) => { return	<Link key={links.id} {...links}/> })};
		</div>
	)
}

const Link = (props) => {
	var {tittle,url1,url2,url3,url4,name1,name2,name3,name4} = props;
	return(
		<div className="nav-column">
			<div className='nav-column__tittle'>{tittle}</div>
			<ul className="nav-column__chapters">
				<li className='items'>
					<a href={url1} className='items__link'>{name1}</a><br/>
					<a href={url2} className='items__link'>{name2}</a><br/>
					<a href={url3} className='items__link'>{name3}</a><br/>
					<a href={url4} className='items__link'>{name4}</a>
				</li>
			</ul>
		</div>
	)
}

export default Footer;

Footer.propTypes = {
	response: PropTypes.oneOf(['desktop', 'mobile', 'tablet']),
	names: PropTypes.arrayOf(PropTypes.string),
	urls: PropTypes.arrayOf(PropTypes.string),
};
Footer.defaultProps = {
	response: 'desktop'
};
