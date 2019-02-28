import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { ToggleButton } from './ToggleButton';

configure({ adapter: new Adapter() });

describe('<ToggleButton />', () => {
    let wrapper;
    let toggleButton;

    beforeEach(() => {
        wrapper = mount(<ToggleButton />);
        toggleButton = wrapper.instance();
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ToggleButton />, div);
    });

    it('renders instances', () => {
        expect(toggleButton).toBeInstanceOf(ToggleButton);
    });

    it('should disabled when disabled is disabled', () => {
        wrapper = mount(<ToggleButton disabled="disabled" />);
        expect(wrapper.find('.p-togglebutton').props().className).toContain('p-disabled');
    });

    it('should enabled by default', () => {
        expect(wrapper.find('.p-togglebutton').props().className).not.toContain('p-disabled');
    });

    it('should call toggle() ', () => {
        let oldChecked = false;
        const onToggleSpy = jest.spyOn(ToggleButton.prototype, 'toggle');
        const onFocusSpy = jest.spyOn(ToggleButton.prototype, 'onFocus');
        wrapper = mount(<ToggleButton onChange={(event) => { oldChecked = event.target.value }} />);
        wrapper.simulate('click');
        wrapper.find('input').simulate('focus');
        expect(oldChecked).toBe(true);
        expect(onToggleSpy).toHaveBeenCalledTimes(1);
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        onFocusSpy.mockClear();
        onToggleSpy.mockClear();
    });

    it('should call onKeyDown() ', () => {
        const onToggleSpy = jest.spyOn(ToggleButton.prototype, 'toggle');
        const onKeyDownSpy = jest.spyOn(ToggleButton.prototype, 'onKeyDown');
        wrapper = mount(<ToggleButton />);
        wrapper.find('input').simulate('keyDown', { key: 'Enter'});
        expect(onKeyDownSpy).toHaveBeenCalledTimes(1);        
        expect(onToggleSpy).toHaveBeenCalledTimes(1);
    });

    it('should add p-focus class when focused and when blured it should removed', () => {
        wrapper.find('input').simulate('focus', { target: { focused: true } });
        wrapper.update();
        expect(wrapper.find('.p-togglebutton').props().className).toContain('p-focus');
        wrapper.find('input').simulate('blur', { target: { focused: false } });
        wrapper.update();
        expect(wrapper.find('.p-togglebutton').props().className).not.toContain('p-focus');
    });

    it('should call onFocus when focused and when blured it should called', () => {
        const onFocusSpy = jest.spyOn(ToggleButton.prototype, 'onFocus');
        onFocusSpy.mockClear();
        const onBlurSpy = jest.spyOn(ToggleButton.prototype, 'onBlur');
        const wrapper = mount(<ToggleButton />);
        wrapper.find('input').simulate('focus');
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        wrapper.find('input').simulate('blur');
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
    });

    it('should add classes and change icon and label when checked prop changed ', () => {
        const wrapper = mount(<ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" />);
        wrapper.setProps({ checked: true });
        expect(wrapper.find('.p-button').props().className).toContain('p-highlight');
        expect(wrapper.find('.p-button').text()).toContain('I confirm');
        expect(wrapper.find('.p-c').props().className).toContain('pi pi-check');
        wrapper.setProps({ checked: false });
        expect(wrapper.find('.p-button').props().className).not.toContain('p-highlight');
        expect(wrapper.find('.p-button').text()).toContain('I reject');
        expect(wrapper.find('.p-c').props().className).toContain('pi pi-times');
    });

    it('should display p-button-text-only class ', () => {
        const wrapper = mount(<ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" />);
        const toggle = wrapper.find('.p-button');
        expect(toggle).toHaveLength(1);
        const icon = wrapper.find('.p-c');
        expect(icon).toHaveLength(1);
        expect(wrapper.find('.p-button').props().className).toContain('p-button-text-icon-left');
        expect(wrapper.find('.p-c').props().className).toContain('p-button-icon-left');
    });

    it('should display p-button-text-only class ', () => {
        const wrapper = mount(<ToggleButton onLabel="I confirm" offLabel="I reject" />);
        const toggle = wrapper.find('.p-button');
        expect(toggle).toHaveLength(1);
        expect(wrapper.find('.p-button').props().className).toContain('p-button-text-only');
    });

    it('should call componentDidMount', () => {
        const didMountSpy = jest.spyOn(ToggleButton.prototype, 'componentDidMount');
        expect(didMountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<ToggleButton tooltip='OnClick' />);
        expect(didMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentWillUnmount', () => {
        const didUnmountSpy = jest.spyOn(ToggleButton.prototype, 'componentWillUnmount');
        expect(didUnmountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<ToggleButton tooltip='OnClick' />);
        wrapper.unmount();
        expect(didUnmountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidUpdate ', () => {
        const didUpdateSpy = jest.spyOn(ToggleButton.prototype, 'componentDidUpdate');
        const wrapper = mount(<ToggleButton tooltip="onClick" />);
        expect(didUpdateSpy).toHaveBeenCalledTimes(0);
        wrapper.setProps({ tooltip: 'onFocus' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
    });

    it('calls renderTooltip() when component updated', () => {
        const handleClick = jest.fn();
        const didUpdateSpy = jest.spyOn(ToggleButton.prototype, 'componentDidUpdate');
        const renderTooltipSpy = jest.spyOn(ToggleButton.prototype, 'renderTooltip');
        const wrapper = mount(<ToggleButton onClick={handleClick} />);
        wrapper.setProps({ tooltip: 'PrimeTool' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(2);
        expect(renderTooltipSpy).toHaveBeenCalledTimes(1);
    });

})
