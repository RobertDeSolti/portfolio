import React from 'react'
import {PopUp} from './SignPopUp'
import {SignIn, SignUp} from './SignPopUp'

export default {
  title: 'Components/PopUp',
  component: PopUp,
}

const Template = (args) => <PopUp {...args} />

// Each story then reuses that template
export const SignInPop = Template.bind({});
SignInPop.args = {
	destination:'sign up',
	offertxt:'Please sign in to get the best offers',
	popupname:'Sign In',
	question:'Don\'t',
	signform:<SignIn />,
	signtype:false,
}
export const SignUpPop = Template.bind({});
SignUpPop.args = {
	url: SignInPop,
	destination: 'sign in',
	offertxt: ['Please sign up to get the best offers'],
	question: ['Already'],
	popupname: ['Sign Up'],
	signform: <SignUp/>,
}