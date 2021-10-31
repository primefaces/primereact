import React from 'react';
import { render } from '@testing-library/react';
import { Captcha } from '../../components/captcha/Captcha';

describe('Captcha Component', () => {
    test('should display the Captcha' , () => {
        const { container } = render(<Captcha />);

        expect(container).toBeInTheDocument();
    })
})