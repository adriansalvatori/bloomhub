/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import ProductImage from './ProductImage'; // Import your ProductImage component
import Placeholder from '../../assets/images/Placeholder.png'; // Import the placeholder image

export default {
  title: 'ProductImage',
  component: ProductImage,
};

const Template = (args) => <ProductImage {...args} />;

export const Size350 = Template.bind({});
Size350.args = {
  imageUrl: Placeholder,
  size: 350,
  offset: 20,
};

export const Size250 = Template.bind({});
Size250.args = {
  imageUrl: Placeholder,
  size: 250,
  offset: 15,
};

export const Size130 = Template.bind({});
Size130.args = {
  imageUrl: Placeholder,
  size: 130,
  offset: 10,
};
