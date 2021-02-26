/* eslint-disable no-dupe-keys */
/* eslint-disable no-sequences */

/*eslint no-undef: "error"*/
import PropTypes from 'prop-types';
import React from 'react';
import './footer.scss'

const linkData = [
	{id: 1, tittle: 'Company', url1: '#Company1',url2: '#Company2', url3:'#Company3',url4:'#Company4', name1:'About',name2:'Team',name3:'Careers',name4:'Privacy Policy'},
	{id: 2, tittle: 'Locations', url1: '#Locations1',url2:'#Locations2',url3:'#Locations3', url4:'#Locations4', name1:'Warsaw',name2:'Cracow',name3:'Gdansk',name4:'Katowice'},
	{id: 3, tittle: 'Social Media', url1:'#Social_Media1',url2:'#Social_Media',url3:'#Social_Media',url4:'#Social_Media', name1:'Facebook',name2:'Twitter',name3:'Instagram',name4:'Youtube'}
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




// const NavColumn = (props) => {
// 	const {tittle, url, name} = props;
// 	return(
// 		<div className='nav-column'>
// 			<p className='nav-column__tittle'>{tittle}</p>
// 			<ul className='nav-column__chapters'>
// 				<li className='items'>
// 					<a href={url} className='items__link'>{name}</a>
// 				</li>
// 			</ul>
// 		</div>
// 	)
// }

export default Footer;

Footer.propTypes = {
	response: PropTypes.oneOf(['desktop', 'mobile', 'tablet']),
	names: PropTypes.arrayOf(PropTypes.string),
	urls: PropTypes.arrayOf(PropTypes.string),
};
Footer.defaultProps = {
	response: 'desktop'
};





// {linkData.map((linkurl) => {
// 	url={linkurl};
// 	name={...linkurl.names};
// 	return
// })}