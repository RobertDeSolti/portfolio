import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation,
}

const Template = (args) => <Navigation {...args} />

// Each story then reuses that template
export const NavigationArrow = Template.bind({})
NavigationArrow.args = {
  primary: true,
}