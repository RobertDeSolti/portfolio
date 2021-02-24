// Footer.stories.js

import React from 'react'
import Footer from './Footer'

export default {
  title: 'Footer',
  component: Footer,
  response: 'desktop',
}

const Template = (args) => <Footer {...args} />

// Each story then reuses that template
export const Desktop = Template.bind({})
Desktop.args = {
	response: 'desktop',
}

export const Tablet = Template.bind({})
Tablet.args = {
	response: 'tablet',
}

export const Mobile = Template.bind({})
Mobile.args = {
	response: 'mobile',
}
