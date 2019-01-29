import React from 'react'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import { Card } from './Card';

configure({ adapter: new Adapter() });

describe('<Checkbox />', () => {
    let wrapper;
    let card;

    beforeEach(() => {
        wrapper = mount(<Card />);
        card = wrapper.instance();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
    });

    it('renders instances', () => {
        expect(card).toBeInstanceOf(Card);
    });

    it('should rendered properly', () => {
        const header = (
            <img alt="Card" src='showcase/resources/demo/images/usercard.png' />
        );
        const footer = (
            <span>Prime React Footer</span>
        );
        const children = (
            <span>Prime React Content</span>
        );
        const wrapper = mount(<Card title="Simple Card" header={header} children={children} footer={footer} subTitle="Subtitle" />);
        expect(wrapper.instance().props.header.type).toEqual('img');
        expect(wrapper.instance().props.footer.type).toEqual('span');
        expect(wrapper.instance().props.children.type).toEqual('span');
        expect(wrapper.instance().props.subTitle).toEqual('Subtitle');
        expect(wrapper.contains([<span>Prime React Footer</span>]));
        expect(wrapper.contains([<span>Prime React Content</span>]));
        expect(wrapper.contains([<img alt="Card" src='showcase/resources/demo/images/usercard.png' />]));
    });
    
})
