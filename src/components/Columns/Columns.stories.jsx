/** Import Base Styles */
import "./../../assets/styles/main.scss";

/** Import the Components */
import Columns from './Columns';
import ProductCard from '../ProductCard'; 
import Placeholder from '../../assets/images/Placeholder.png'; 

export default {
  title: 'Columns',
  component: Columns,
} 

const Template = (args) => (
  <Columns {...args}>
    <ProductCard productId={1} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={29.99} />
    <ProductCard productId={2} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={39.99} />
    <ProductCard productId={1} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={29.99} />
    <ProductCard productId={2} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={39.99} />
    <ProductCard productId={1} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={29.99} />
    <ProductCard productId={2} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={39.99} />
    <ProductCard productId={1} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={29.99} />
    <ProductCard productId={2} imageSrc={Placeholder} type="is-encapsulated" title="Monstera" price={39.99} />
  </Columns>
);

export const Default = Template.bind({});
Default.args = {
  columnSize: 'is-one-fifth',
  tabletSize: 'tablet-is-one-third',
  mobileSize: 'mobile-is-half',
};

export const Carousel = Template.bind({});
Carousel.args = {
  ...Default.args,
  isCarousel: true,
};
