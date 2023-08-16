/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Component */
import ProductCard from './ProductCard'; 
import Placeholder from '../../assets/images/Placeholder.png'; 

export default {
  title: 'ProductCard',
  component: ProductCard,
};

const Template = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  productId: 1,
  imageSrc: Placeholder,
  title: "Monstera",
  price: 20.99,
  type: "is-encapsulated",
};