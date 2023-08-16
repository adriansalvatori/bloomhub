/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import Icon from './Icon'; 

export default {
  title: 'Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  name: 'signIn',
};

export const UserFocus = Template.bind({});
UserFocus.args = {
  name: 'userFocus',
};

export const MagnifyingGlass = Template.bind({});
MagnifyingGlass.args = {
  name: 'magnifyingGlass',
};

export const Heart = Template.bind({});
Heart.args = {
  name: 'heart',
};

export const Basket = Template.bind({});
Basket.args = {
  name: 'basket',
};

export const HouseLine = Template.bind({});
HouseLine.args = {
  name: 'houseLine',
};

export const Scan = Template.bind({});
Scan.args = {
  name: 'scan',
};

export const User = Template.bind({});
User.args = {
  name: 'user',
};

export const Moon = Template.bind({});
Moon.args = {
  name: 'moon',
};

export const PlusCircle = Template.bind({});
PlusCircle.args = {
  name: 'plusCircle',
};

export const MinusCircle = Template.bind({});
MinusCircle.args = {
  name: 'minusCircle',
};

export const Trash = Template.bind({});
Trash.args = {
  name: 'trash',
};

export const SignOut = Template.bind({});
SignOut.args = {
  name: 'signOut',
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  name: 'arrowRight',
};
