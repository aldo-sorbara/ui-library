import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing

// Browser mocks
const fbScript = document.createElement('script');
fbScript.id = 'facebook-jssdk';
document.body.appendChild(fbScript);

global.shallow = shallow;
global.render = render;
global.mount = mount;
