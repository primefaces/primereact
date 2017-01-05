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
});