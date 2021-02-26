// Input.stories.js
/* eslint-disable import/no-anonymous-default-export */

import React from 'react'
import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  type: 'search',
}

const Template = (args) => <Input {...args} />

// Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}

export const WithError = Template.bind({})
WithError.args = {
  errors: ['Invalid Input'],
}
