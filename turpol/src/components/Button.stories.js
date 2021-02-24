import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
	primary: false,
	label: 'Button',
};

export const Submit = Template.bind({});
Submit.args = {
  size: 'large',
  type: 'submit',
  label: 'Button',
};

export const Pressbtn = Template.bind({});
Pressbtn.args = {
  size: 'medium',
  type: 'button',
  label: 'Button',
};
