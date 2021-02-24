import React from 'react'
import PropTypes from 'prop-types'

// import './footer.scss'



const links = [
	{ id: 1, tittle: 'Company', url: '#Company', name:(['About' , 'Team' , 'Careers' , 'Privacy Policy']) },
  
	{ id: 2, tittle: 'Locations', url: '#Locations', name: 'Warsaw , Cracow , Gdansk , Katowice' },
  
	{ id: 3, tittle: 'Social Media', url: '#SocialMedia', name: 'Facebook , Twitter , Instagram , Youtube' },
  
];

  
export const Footer = ({response , ...rest}) => {
	return (
		<div className={['section-inner', `section-inner__${response}`].join(' ')}>
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
	return(
		<nav className='secction-footer__nav'>
			{links.map((link) => {
				return <NavColumn key={link.id} {...link} />
			})}
		</nav>
	);
};


const NavColumn = (props) => {
	const {tittle, url, name} = props;
	return(
		<div className='nav-column'>
			<p className='nav-column__tittle'>{tittle}</p>
			<ul className='nav-column__chapters'>
				<li className='items'>
					<a href={url} className='items__link'>{name}</a>
				</li>
			</ul>
		</div>
	)
}


export default Footer;


Footer.propTypes = {
	response: PropTypes.oneOf(['desktop', 'mobile', 'tablet']),
};
  
Footer.defaultProps = {
	response: 'desktop',
};


