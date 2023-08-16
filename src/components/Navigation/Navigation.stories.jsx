/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import Navigation from './Navigation'; 
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>], 
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});