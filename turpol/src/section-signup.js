import React from 'react'
import ReactDOM from 'react-dom'
import PopUp from './components/SignPopUp'
import {SignUp} from './components/SignPopUp'
import './components/signpopup.scss'


function PopSignUp(){

	return(
		<div className="signin">
			<PopUp
			destination="sign in"
			offertxt={['Please sign up to get the best offers']}
			onClick="PropTypes.func"
			popupname={['Sign Up']}
			question={['Don\'t']}
			signform={<SignUp />}
			signtype={true}
			url="#!"
			/>
		</div>
	)

}

ReactDOM.render(<PopSignUp />, document.getElementById('signup'))