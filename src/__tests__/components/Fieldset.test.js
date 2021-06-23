import React from 'react';
import { render } from '@testing-library/react';
import { Fieldset } from '../../components/fieldset/Fieldset';

describe('Fieldset Component', () => {
    test('should display the Fieldset' , () => {
        const { container } = render(<Fieldset />);
        const fieldsetElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(fieldsetElement).toBeInTheDocument();
        expect(fieldsetElement).toHaveClass('p-fieldset p-component');
    })
})