import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { Checkbox } from './Checkbox';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
    let wrapper;
    let checkbox;

    beforeEach(() => {
        wrapper = mount(<Checkbox />);
        checkbox = wrapper.instance();
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Checkbox />, div);
    });

    it('renders instances', () => {
        expect(checkbox).toBeInstanceOf(Checkbox);
    });

    it('should call OnClick()', () => {
        const onClickSpy = jest.spyOn(Checkbox.prototype, 'onClick');
        const onFocusSpy = jest.spyOn(Checkbox.prototype, 'onFocus');
        const handleClick = jest.fn();
        const wrapper = mount(<Checkbox onChange={handleClick} />);
        wrapper.simulate('click');
        wrapper.find('input').simulate('focus');
        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        onFocusSpy.mockClear();
    });

    it('should call onKeyDown() ', () => {
        const onKeyDownSpy = jest.spyOn(Checkbox.prototype, 'onKeyDown');
        wrapper = mount(<Checkbox />);
        wrapper.find('input').simulate('keyDown', { keyCode: 13 });
        expect(onKeyDownSpy).toHaveBeenCalledTimes(1);
    });

    it('should add classes and change icon when checked prop changed ', () => {
        wrapper = mount(<Checkbox />);
        wrapper.setProps({ checked: true });
        expect(wrapper.find('.p-c').props().className).toContain('pi pi-check');
        expect(wrapper.find('.p-checkbox-box').props().className).toContain('p-highlight');
        wrapper.setProps({ checked: false });
        expect(wrapper.find('.p-c').props().className).not.toContain('pi pi-check');
        expect(wrapper.find('.p-checkbox-box').props().className).not.toContain('p-highlight');
    });

    it('should add p-focus class when focused and when blured it should removed', () => {
        wrapper.find('input').simulate('focus', { target: { focused: true } });
        wrapper.update();
        expect(wrapper.find('.p-checkbox-box').prop('className')).toContain('p-focus');
        wrapper.find('input').simulate('blur', { target: { focused: false } });
        wrapper.update();
        expect(wrapper.find('.p-checkbox-box').prop('className')).not.toContain('p-focus');
    });

    it('should call onFocus when focused and when blured it should called', () => {
        const onFocusSpy = jest.spyOn(Checkbox.prototype, 'onFocus');
        onFocusSpy.mockClear();
        const onBlurSpy = jest.spyOn(Checkbox.prototype, 'onBlur');
        const wrapper = mount(<Checkbox inputId="i" />);
        wrapper.find('input').simulate('focus');
        expect(onFocusSpy).toHaveBeenCalledTimes(1);
        wrapper.find('input').simulate('blur');
        expect(onBlurSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidMount', () => {
        const didMountSpy = jest.spyOn(Checkbox.prototype, 'componentDidMount');
        expect(didMountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<Checkbox tooltip='OnClick' />);
        expect(didMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentWillUnmount', () => {
        const didUnmountSpy = jest.spyOn(Checkbox.prototype, 'componentWillUnmount');
        expect(didUnmountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<Checkbox tooltip='OnClick' />);
        wrapper.unmount();
        expect(didUnmountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidUpdate ', () => {
        const didUpdateSpy = jest.spyOn(Checkbox.prototype, 'componentDidUpdate');
        const wrapper = mount(<Checkbox tooltip="onClick" />);
        expect(didUpdateSpy).toHaveBeenCalledTimes(0);
        wrapper.setProps({ tooltip: 'onFocus' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
    });

    it('calls renderTooltip() when component updated', () => {
        const handleClick = jest.fn();
        const didUpdateSpy = jest.spyOn(Checkbox.prototype, 'componentDidUpdate');
        const renderTooltipSpy = jest.spyOn(Checkbox.prototype, 'renderTooltip');
        const wrapper = mount(<Checkbox onClick={handleClick} />);
        wrapper.setProps({ tooltip: 'PrimeTool' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(2);
        expect(renderTooltipSpy).toHaveBeenCalledTimes(1);
    });

})
