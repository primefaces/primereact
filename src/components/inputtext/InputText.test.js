import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { InputText } from './InputText';

configure({ adapter: new Adapter() });

describe('<InputText />', () => {
    let wrapper;
    let inputText;

    beforeEach(() => {
        wrapper = mount(<InputText />);
        inputText = wrapper.instance();
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<InputText />, div);
    });

    it('renders instances', () => {
        expect(inputText).toBeInstanceOf(InputText);
    });

    it('should disabled when disabled is disabled', () => {
        wrapper = mount(<InputText disabled="disabled" />);
        expect(wrapper.find('input').prop('className')).toContain('p-disabled');
    });

    it('should enabled by default', () => {
        expect(wrapper.find('input').prop('className')).not.toContain('p-disabled');
    });

    it('should not contain p-filled class if it did not filled', () => {
        wrapper = mount(<InputText defaultValue="" />);
        expect(wrapper.find('input').props().className).not.toContain('p-filled');
    });

    it('should contain p-filled class if it filled', () => {
        wrapper = mount(<InputText defaultValue="PrimeReact" />);
        expect(wrapper.find('input').props().className).toContain('p-filled');
    });

    it('should call onInput() and changed the value ', () => {
        const onInputSpy = jest.spyOn(InputText.prototype, 'onInput');
        let value;
        wrapper = mount(
            <InputText type="text" onInput={(event) => { value = event.target.value; }} defaultValue="" keyfilter="alpha" />);
        wrapper.find('input').simulate('input', { target: { value: 'prime' } });
        expect(value).toBe('prime');
        expect(onInputSpy).toHaveBeenCalledTimes(1);
        onInputSpy.mockClear();
    });

    it('onKeyPress', () => {
        const handleKeyPress = jest.fn();
        const onKeyPressSpy = jest.spyOn(InputText.prototype, 'onKeyPress');
        let value;
        wrapper = mount(
            <InputText id="input1" onInput={(e) => { value = e.target.value; }} onKeyPress={handleKeyPress} defaultValue=""
                keyfilter="pint" validateOnly={true} />);
        wrapper.simulate('keyPress', {
            key: '1',
        });
        wrapper.find('input').simulate('input');
        expect(onKeyPressSpy).toHaveBeenCalledTimes(1);
        expect(handleKeyPress).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidMount', () => {
        const didMountSpy = jest.spyOn(InputText.prototype, 'componentDidMount');
        expect(didMountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<InputText tooltip="onClick" />);
        expect(didMountSpy).toHaveBeenCalledTimes(1);
    });

    it('should call componentDidUpdate ', () => {
        const didUpdateSpy = jest.spyOn(InputText.prototype, 'componentDidUpdate');
        const wrapper = mount(<InputText tooltip="onClick" />);
        expect(didUpdateSpy).toHaveBeenCalledTimes(0);
        wrapper.setProps({ tooltip: 'onFocus' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
        didUpdateSpy.mockClear();
    });

    it('should call componentWillUnmount', () => {
        const didUnmountSpy = jest.spyOn(InputText.prototype, 'componentWillUnmount');
        expect(didUnmountSpy).toHaveBeenCalledTimes(0);
        const wrapper = mount(<InputText tooltip='onClick' />);
        wrapper.unmount();
        expect(didUnmountSpy).toHaveBeenCalledTimes(1);
    });

    it('calls renderTooltip() when component', () => {
        const handleClick = jest.fn();
        const didUpdateSpy = jest.spyOn(InputText.prototype, 'componentDidUpdate');
        const renderTooltipSpy = jest.spyOn(InputText.prototype, 'renderTooltip');
        const wrapper = mount(<InputText onClick={handleClick} />);
        wrapper.setProps({ tooltip: 'PrimeTooltip' });
        expect(didUpdateSpy).toHaveBeenCalledTimes(1);
        expect(renderTooltipSpy).toHaveBeenCalledTimes(1);
        didUpdateSpy.mockClear();
    });
})