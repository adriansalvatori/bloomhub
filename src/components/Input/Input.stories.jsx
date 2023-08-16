/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import Input from './Input'; 

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'is-primary',
  icon: 'user',
  placeholder: 'Username',
};

export const White = Template.bind({});
White.args = {
  type: 'is-white',
  placeholder: 'Password',
};
