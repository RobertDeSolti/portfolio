import React from 'react';
import PropTypes from 'prop-types';
import './signin.scss';

// setup vars
const social = [
	{ id: 1, socialLink: 'https://', icon: './' },
	{ id: 2, socialLink: 'https://', icon: './' },
	{ id: 3, socialLink: 'https://', icon: './' },
	{ id: 4, socialLink: 'https://', icon: './' },
]

export const PopUp = ({url, popupname , destination, offertxt, onClick, question, ...props}) => {
	return(
		<div className="signin-popup">
			<div className="popup__tittle">{props.popupname}</div>	
			<div className="popup__subtittle">Welcome to turpol! {props.offertxt}</div>
			<form className="popup__inputs">
				
			</form>
			<div className="popup__redirect">
				<div className="redirect-txt">
					{props.question} have an account than <a href={props.url}>{props.destination}</a>
				</div>
				<div className="redirect-icons">
					{social.map((path) => {
        				return <PopupSocial key={path.id} {...path}></PopupSocial>
      						})}
				</div>
			</div>
		</div>
	)
};

const PopupSocial = (props) => {
	const {socialLink, icon} = props;
	return(
		<div className="popup__social">
		<a href={socialLink} className="social-links">
			<img src={icon} alt="#!" className="links__icons"/>
		</a>
	</div>
	)
};

PopUp.propTypes = {
	url: PropTypes.string,
	destination: PropTypes.string,
	offertxt: PropTypes.string,
	question: PropTypes.string,
	popupname: PropTypes.string,
	onClick: PropTypes.func,
  };