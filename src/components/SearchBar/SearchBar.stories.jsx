import { action } from '@storybook/addon-actions';
import SearchBar from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add any necessary props here
  onChange: action('Search query changed'),
};
