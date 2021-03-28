import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input'
import './signin.scss';
import {Submit} from './Button.stories'


// setup vars
const social = [
	{ id: 1, socialLink: 'https://www.facebook.com/justsov', icon: '../img/svg/facebook.svg' },
	{ id: 2, socialLink: 'https://www.instagram.com/robertdesolti1/?hl=eng', icon: '../img/svg/instagram.svg' },
	{ id: 3, socialLink: 'https://www.linkedin.com/in/roman-hredil-b3a91b159/', icon: '../img/svg/linkedin.svg' },
	{ id: 4, socialLink: 'https://github.com/RobertDeSolti/portfolio/tree/react', icon: '../img/svg/github.svg' },
]


export const PopUp = ({url, popupname , destination, offertxt, onClick, question, ...props}) => {
	return(
		<div className="signin-popup" {...props}>
			<div className="signin-popup__tittle">{popupname}</div>	
			<div className="signin-popup__subtittle">Welcome to turpol!<br/>{offertxt}</div>
			<form className="signin-popup__inputs">
				<Input
					errors={['Login already exist']}
					placeholder='Create login'
					name='login'
					type='text'
					primary
				/>
				<Input
					errors={['Seems like email been already used for another account']}
					placeholder='Enter email'
					name='email'
					type='text'
					primary
				/>
				<Input
					errors={['Invalid Input']}
					placeholder='Create password'
					name='password'
					type='password'
					primary
				/>
				<Input
					errors={['Invalid Input']}
					placeholder='Repeat password'
					name='repeated password'
					type='password'
					primary
				/>
				<Submit
					name='submit button'
					size= 'large'
					type= 'submit'
					label= 'SIGN UP'
				/>
			</form>
			<div className="signin-popup__redirect">
				<div className="redirect__txt">
					{question} have an account than <a href={url}>{destination}</a>
				</div>
				<div className="redirect__icons">
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
		<div className="social">
			<a href={socialLink} className="social__links">
				<img src={icon} alt="#!" className="icons"/>
			</a>
		</div>
	)
};

export default PopUp;

PopUp.propTypes = {
	url: PropTypes.string,
	destination: PropTypes.string,
	offertxt: PropTypes.string,
	question: PropTypes.string,
	popupname: PropTypes.string,
	onClick: PropTypes.func,
  };

  PopUp.defaultProps = {
	url: '',
	destination: '',
	offertxt: '',
	question: '',
	popupname: '',
	onClick: PropTypes.func,
  }