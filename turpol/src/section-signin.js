import React from 'react'
import ReactDOM from 'react-dom'
import PopUp from './components/SignPopUp'
import {SignIn} from './components/SignPopUp'
import './components/signpopup.scss'


function PopSignIn(){

	return(
		<div className="signin">
			<PopUp
			destination="sign up"
			offertxt={['Please sign in to get the best offers']}
			onClick="PropTypes.func"
			popupname={['Sign In']}
			question={['Don\'t']}
			signform={<SignIn />}
			signtype={false}
			url="#!"
			/>
		</div>
	)

}

ReactDOM.render(<PopSignIn />, document.getElementById('signin'))