import React from 'react'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { Button } from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
    let wrapper;
    let button;

    beforeEach(() => {
        wrapper = shallow(<Button />);
        button = wrapper.instance();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
    });
    it('renders instances', () => {
        expect(button).toBeInstanceOf(Button);
    });

    it('should disabled when disabled is true', () => {
        const wrapper = shallow(<Button label='PrimeReact' disabled="disabled" />);
        expect(wrapper.props().className).toContain('p-disabled');
    });

    it('should enabled by default', () => {
        expect(wrapper.props().className).not.toContain('p-disabled');
    });

    it('should display label and only text class ', () => {
        const wrapper = shallow(<Button label='PrimeReact' />);
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(button.text()).toEqual('PrimeReact');
        expect(wrapper.props().className).toContain('p-button-text-only');
    });

    it('should display icon with only icon class', () => {
        const wrapper = shallow(<Button icon="pi pi-times" />);
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(wrapper.contains([<span className="pi pi-times"></span>]));
        expect(wrapper.props().className).toContain('p-button-icon-only');
    });

    it('should display the icon and icon to be on the left by default', () => {
        const wrapper = shallow(<Button label="PrimeReact" icon="pi pi-times" />);
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(wrapper.contains([<span className="pi pi-times"></span>]));
        expect(button.text()).toEqual('PrimeReact');
        expect(wrapper.props().className).toContain('p-button-text-icon-left');
    });

    it('should display the icon on the right and have a label', () => {
        const wrapper = shallow(<Button icon="pi pi-times" label="PrimeReact" iconPos="right" />);
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(wrapper.contains([<span className="pi pi-times"></span>]))
        expect(button.text()).toEqual('PrimeReact');
        expect(wrapper.props().className).toContain('p-button-text-icon-right');
    });

    it('should call fn when clicked', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(<Button label="PrimeReact" onClick={handleClick} />);
        wrapper.simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });

    it('should call componentDidMount', () => {
        const didMountSpy = jest.spyOn(Button.prototype, 'componentDidMount');
        expect(didMountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<Button tooltip="onClick" />);
        expect(didMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidUpdate ', () => {
        const didUpdateSpy = jest.spyOn(Button.prototype, 'componentDidUpdate');
        const wrapper = mount(<Button tooltip="onClick" />);
        expect(didUpdateSpy).toHaveBeenCalledTimes(0);
        wrapper.setProps({ tooltip: 'onFocus' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
        didUpdateSpy.mockClear();
    });

    it('should call componentWillUnmount', () => {
        const didUnmountSpy = jest.spyOn(Button.prototype, 'componentWillUnmount');
        expect(didUnmountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<Button tooltip='onClick' />);
        wrapper.unmount();
        expect(didUnmountSpy).toHaveBeenCalledTimes(1);
    });

    it('calls renderTooltip() when component', () => {
        const handleClick = jest.fn();
        const didUpdateSpy = jest.spyOn(Button.prototype, 'componentDidUpdate');
        const renderTooltipSpy = jest.spyOn(Button.prototype, 'renderTooltip');
        const wrapper = mount(<Button onClick={handleClick} />);
        wrapper.setProps({ tooltip: 'PrimeTooltip' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
        expect(renderTooltipSpy).toHaveBeenCalledTimes(1);
        didUpdateSpy.mockClear();
    });
});

