import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input'
import {socialmedialinks} from '../js/massive'
import './signpopup.scss';


export const SignPopUp = ({url, popupname , destination, signtype, offertxt, question, closetag, signform}) => {
	const mode = signtype ? 'sign-popup_signup' : 'sign-popup_signin';
	return(
		<div className={mode} id='signpopup'>
			<div className="sign-popup__tittle">{popupname}{closetag}</div>
			<div className="sign-popup__subtittle">Welcome to turpol!<br/>{offertxt}</div>
			{signform}
			<div className="sign-popup__redirect">
				<div className="txt">
					{question} have an account? Than <a href={url} onClick={url}>{destination}</a>
				</div>
				<PopupSocial/>
			</div>
		</div>
	)
}

const PopupSocial = () => {
	const [social] = React.useState(socialmedialinks)
	return (
		<div className="icons">
			{social.map((path) => {
				const { id, socialLink, src } = path
				return (
					<div key={id} className="icons__social">
						<a href={socialLink} className="links">
							<img src={src} alt="#!" className="links__icons"/>
						</a>
					</div>
				)
			})}
		</div>
	);
};


export const SignUp = () => {
	return(
		<form className="signup-popup__inputs" method='POST' name="SignUpForm">
			<Input errors={['Invalid login','Invalid email']} placeholder='Enter login or email' name='loginup' type='text' primary/>
			<Input errors={['Invalid password']} placeholder='Enter password' name='passwordup' type='password' primary/>
			<Input name='submitbtnn' type='submit' value='Sign Up' primary/>
		</form>
	)
};

export const SignIn = () => {
	return(
		<form className="signin-popup__inputs" method='POST' name="SignInForm">
			<Input errors={['Login already exist']} placeholder='Create login' name='loginin' type='text' primary/>
			<Input errors={['Seems like email been already used for another account']} placeholder='Enter email' name='email' type='text' primary/>
			<Input errors={['Invalid Input']} placeholder='Create password' name='password' type='password' primary/>
			<Input errors={['Invalid Input']} placeholder='Repeat password' name='repeated password' type='password' primary/>
			<Input errors={['Not all fields are entered']} value='Sign In' name='submitbtnn' type='submit' />
		</form>
	)
};

export const CloseTag = (onClick) => {
	return(
		<div class="popup-close" {...onClick}>
			<span role="img" aria-label="close" tabindex="-1" class="anticon anticon-close">
				<svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
					<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
				</svg>
			</span>
		</div>
	)
}


export default SignPopUp;

SignPopUp.propTypes = {
	signtype: PropTypes.bool,
	url: PropTypes.string,
	destination: PropTypes.string,
	offertxt: PropTypes.string,
	question: PropTypes.string,
	popupname: PropTypes.string,
	signform: PropTypes.element,
  };

SignPopUp.defaultProps = {
	url: '',
	destination: '',
	offertxt: '',
	question: '',
	popupname: '',
	signtype: undefined,
}