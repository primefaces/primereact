import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
    it('should print the label', () => {
        const button = shallow(
            <Button label="A Button" />
        );
        
        expect(button.text()).toEqual('A Button');

    });

    it('should invoke the click handler on click', () => {

        let done = false;

        const handler = () => {
            done = true;
        };

        const button = shallow(
            <Button onClick={handler} />
        );
        
        expect(done).toBeFalsy();

        button.simulate('click');

        expect(done).toBeTruthy();

    });
});