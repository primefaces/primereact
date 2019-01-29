import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { RadioButton } from './RadioButton';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
    let wrapper;
    let radioButton;

    beforeEach(() => {
        wrapper = mount(<RadioButton />);
        radioButton = wrapper.instance();
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RadioButton />, div);
    });

    it('renders instances', () => {
        expect(radioButton).toBeInstanceOf(RadioButton);
    });

    it('should call OnClick()', () => {
        const onClickSpy = jest.spyOn(RadioButton.prototype, 'onClick');
        const onFocusSpy = jest.spyOn(RadioButton.prototype, 'onFocus');
        const handleClick = jest.fn();
        const wrapper = mount(<RadioButton onChange={handleClick} />);
        wrapper.simulate('click');
        wrapper.find('input').simulate('focus');
        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        onFocusSpy.mockClear();
        onClickSpy.mockClear();
    });

    it('should add classes and change icon when checked prop changed ', () => {
        wrapper = mount(<RadioButton />);
        wrapper.setProps({ checked: true })
        expect(wrapper.find('.p-c').props().className).toContain('pi pi-circle-on')
        expect(wrapper.find('.p-radiobutton-box').props().className).toContain('p-highlight')
        wrapper.setProps({ checked: false })
        expect(wrapper.find('.p-c').props().className).not.toContain('pi pi-circle-on')
        expect(wrapper.find('.p-radiobutton-box').props().className).not.toContain('p-highlight')
    });

    it('should add p-focus class when focused and when blured it should removed', () => {
        wrapper.find('input').simulate('focus', { target: { focused: true } });
        wrapper.update();
        expect(wrapper.find('.p-radiobutton-box').prop('className')).toContain('p-focus');
        wrapper.find('input').simulate('blur', { target: { focused: false } });
        wrapper.update();
        expect(wrapper.find('.p-radiobutton-box').prop('className')).not.toContain('p-focus');
    });

    it('should call onFocus when focused and when blured it should called', () => {
        const onFocusSpy = jest.spyOn(RadioButton.prototype, 'onFocus');
        onFocusSpy.mockClear();
        const onBlurSpy = jest.spyOn(RadioButton.prototype, 'onBlur');
        const wrapper = mount(<RadioButton />);
        wrapper.find('input').simulate('focus');
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        wrapper.find('input').simulate('blur');
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidMount', () => {
        const didMountSpy = jest.spyOn(RadioButton.prototype, 'componentDidMount');
        expect(didMountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<RadioButton tooltip='OnClick' />);
        expect(didMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentWillUnmount', () => {
        const didUnmountSpy = jest.spyOn(RadioButton.prototype, 'componentWillUnmount');
        expect(didUnmountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<RadioButton tooltip='OnClick' />);
        wrapper.unmount();
        expect(didUnmountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidUpdate ', () => {
        const didUpdateSpy = jest.spyOn(RadioButton.prototype, 'componentDidUpdate');
        const wrapper = mount(<RadioButton tooltip="onClick" />);
        expect(didUpdateSpy).toHaveBeenCalledTimes(0);
        wrapper.setProps({ tooltip: 'onFocus' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
    });

    it('calls renderTooltip() when component updated', () => {
        const handleClick = jest.fn();
        const didUpdateSpy = jest.spyOn(RadioButton.prototype, 'componentDidUpdate');
        const renderTooltipSpy = jest.spyOn(RadioButton.prototype, 'renderTooltip');
        const wrapper = mount(<RadioButton onClick={handleClick} />);
        wrapper.setProps({ tooltip: 'PrimeTool' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(2);
        expect(renderTooltipSpy).toHaveBeenCalledTimes(1);
    });

})
