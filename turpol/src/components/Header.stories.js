import React from 'react';

import  Header  from './Header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Active = Template.bind({});
Active.args = {
	statement: true,
};

export const Unactive = Template.bind({});
Unactive.args = {
	statement: false,
};
