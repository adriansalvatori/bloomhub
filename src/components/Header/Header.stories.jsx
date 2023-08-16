/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import React from 'react';
import Header from './Header'; // Import your Header component

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});