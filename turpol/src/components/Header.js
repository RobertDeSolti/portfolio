import React, {useState} from 'react'
import './header.scss'
import SignPopUp, {SignIn, SignUp, CloseTag}  from './SignPopUp';
import {navigationLinks} from '../js/massive'

export function Header () {
/* Header elements start */
	const MenuList = () => {
		return (
			<ul className='list'>
			<MenuLink/>
			<PopupCall/>
			</ul>
		);
	};
  	const PopupCall = () => {
		return(
			<li className='list__item'>
				<button type='button' className='links' onClick={TogglePopup}>Sign In</button>
			</li>
		)
 	};
/* Header elements end */
/* Header functions start */
	const [showPopup, setShowPopup] = useState(false);
	const [switchPopup, setSwitchPopup] = useState(false)
	const TogglePopup = () => {
    	if (showPopup === false){
    		setShowPopup(true);
		}
  	};
	const SwitchForm = () => {
		if (switchPopup === false){
			setShowPopup(false);
			setSwitchPopup(true);
		} else {
			setSwitchPopup(false);
			setShowPopup(true);
		}
	}
	const ClosePopup = () => {
		setShowPopup(false);
		setSwitchPopup(false);
	}
/* Header functions end */
  	return (
		<div className='section-wrapper'>
		<div className='section-wrapper__logo'>
			<a href='localhost:3000/' className='link'>
				<img src='img/svg/turpol-logo_sm.svg' alt='logo' className='link__svg'/>
			</a>
		</div>
		<nav className='section-wrapper__menu'>
			<MenuList />
		</nav>
		{showPopup ? (
			<div className="sign-popup">
				<SignPopUp
				destination="sign up"
				offertxt={['Please sign in to get the best offers']}
				popupname={['Sign In']}
				question={['Don\'t']}
				signform={<SignIn />}
				closetag={<CloseTag onClick={ClosePopup}/>}
				signtype={false}
				url={SwitchForm} 
				/>
			</div>
		) : null}
		{switchPopup ? (
				<div className="sign-popup">
				<SignPopUp
				destination="sign in"
				offertxt={['Please sign up to get the best offers']}
				popupname={['Sign Up']}
				question={['Already']}
				signform={<SignUp />}
				closetag={<CloseTag onClick={ClosePopup}/>}
				signtype={true}
				url={SwitchForm} 
				/>
			</div>
		) : null}
	</div>
  	);
}

const MenuLink = () => {
	const [links] = useState(navigationLinks)
	return (
		<>
			{links.map((link) => {
				const { id, url , name} = link;
				return(
				<li key={id} className='list__item' >
					<a href={url} className='links js-scroll'>
					{name}
					</a>
				</li>
				)
			})}
		</>
	)
};

export default Header;

