
/*eslint no-undef: "error"*/
import PropTypes from 'prop-types';
import React from 'react';
import './footer.scss'

const linkData = [
	{id: 1, tittle: 'Company', urls: ['#Company1', '#Company', '#Company','#Company'], names: ['About','Team','Careers','Privacy Policy']},
	{id: 2, tittle: 'Locations', urls: [ '#Locations1','#Locations','#Locations','#Locations'], names: [ 'Warsaw','Cracow','Gdansk','Katowice']},
	{id: 3, tittle: 'Social Media', urls: [ '#Social_Media1','#Social_Media','#Social_Media','#Social_Media'], names: ['Facebook','Twitter','Instagram','Youtube']}
]


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
		<div className='secction-footer__nav'>
		{linkData.map((links) => {
			return	<Link key={links.id} {...links}/>
		})}
		</div>
	)
}

const Link = (props) => {
	return(
		<div className="nav-column">
			<div className='nav-column__tittle'>{props.tittle}</div>
			<ul className="nav-column__chapters">
				<li className='items'>
					<a href={props.urls} className='nav-column-items__link'>{props.names}</a>
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



