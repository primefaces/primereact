import React from 'react';
import { render } from '@testing-library/react';
import { CascadeSelect } from '../../components/cascadeselect/CascadeSelect';

describe('CascadeSelect Component', () => {
    test('should display the CascadeSelect' , () => {
        const { container } = render(<CascadeSelect />);
        const csElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(csElement).toBeInTheDocument();
        expect(csElement).toHaveClass('p-cascadeselect p-component');
    })
})