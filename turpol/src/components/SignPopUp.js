import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input'
import './signpopup.scss';



// setup vars
const social = [
	{ id: 1, socialLink: 'https://www.facebook.com/justsov', icon: '../img/svg/facebook.svg' },
	{ id: 2, socialLink: 'https://www.instagram.com/robertdesolti1/?hl=eng', icon: '../img/svg/instagram.svg' },
	{ id: 3, socialLink: 'https://www.linkedin.com/in/roman-hredil-b3a91b159/', icon: '../img/svg/linkedin.svg' },
	{ id: 4, socialLink: 'https://github.com/RobertDeSolti/portfolio/tree/react', icon: '../img/svg/github.svg' },
]


export const PopUp = ({url, popupname , destination, signtype, offertxt, onClick, question, signform, ...props}) => {
	const mode = signtype ? 'sign-popup_signup' : 'sign-popup_signin'; 
	return(
		<div className={mode} {...props}>
			<div className="sign-popup__tittle">{popupname}</div>	
			<div className="sign-popup__subtittle">Welcome to turpol!<br/>{offertxt}</div>
			{signform}
			<div className="sign-popup__redirect">
				<div className="txt">
					{question} have an account? Than <a href={url}>{destination}</a>
				</div>
				<div className="icons">
					{social.map((path) => {
        				return <PopupSocial key={path.id} {...path}></PopupSocial>
      						})}
				</div>
			</div>
		</div>
		
	)
};

export const SignUp = () => {
	return(
		<form className="signup-popup__inputs">
			<Input
				errors={['Invalid login','Invalid email']}
				placeholder='Enter login or email'
				name='loginup'
				type='text'
				primary
			/>
			<Input
				errors={['Invalid password']}
				placeholder='Create password'
				name='passwordup'
				type='password'
				primary
			/>
			<Input
				name='submitbtnn'
				type='submit'
				value='Sign Up'
				primary
			/>
		</form>
	)
};

export const SignIn = () => {
	return(
		<form className="signin-popup__inputs">
			<Input
				errors={['Login already exist']}
				placeholder='Create login'
				name='loginin'
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
			<Input
				name='submitbtnn'
				type='submit'
				value='Sign In'
				primary
			/>
		</form>
	)
};

const PopupSocial = (props) => {
	const {socialLink, icon} = props;
	return(
		<div className="icons__social">
			<a href={socialLink} className="links">
				<img src={icon} alt="#!" className="links__icons"/>
			</a>
		</div>
	)
};


export default PopUp;

PopUp.propTypes = {
	signtype: PropTypes.bool,
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
	signtype: true,
  }