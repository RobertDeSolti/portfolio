import React from 'react'
import ReactDOM from 'react-dom'
import PopUp from './components/SignIn'
import './components/signin.scss'


function SignIn(){

	return(
		<div className="signin">
			<PopUp 
			  popupname= 'Sign Up'
			  destination='sign in'
			  offertxt='Please sign up to get the best offers'
			  onClick=''
			  question='Already'>
			</PopUp>
		</div>
	)

}

ReactDOM.render(<SignIn />, document.getElementById('signin'))