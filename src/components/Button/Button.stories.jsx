/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import Button from "./Button";

export default {
    title : 'Button',
    component : Button,
    args : {
        children: 'Hello there!'
    }
}

const Template = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    color: 'is-primary'
}

export const Dark = Template.bind({});
Dark.args = {
    color: 'is-dark'
}

export const Light = Template.bind({});
Light.args = {
    color: 'is-light',
}
