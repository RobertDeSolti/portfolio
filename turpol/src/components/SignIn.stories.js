import React from 'react'
import PopUp from './SignIn'

export default {
  title: 'Components/PopUp',
  component: PopUp,
  popupname:'Sign Up',
  offertxt:'Please sign up to get the best offers',
  question:'Already'
}

const Template = (args) => <PopUp {...args} />

// Each story then reuses that template
export const SignInPop = Template.bind({})
SignInPop.args = {
	url: '#!',
	destination: 'sign up',
	offertxt: ['Please sign in to get the best offers'],
	question: ['Already'],
	popupname: ['Sign In'],
}

export const SignUpPop = Template.bind({})
SignUpPop.args = {
	url: '#!',
	destination: 'sign in',
	offertxt: ['Please sign up to get the best offers'],
	question: ['Already'],
	popupname: ['Sign Up'],
}