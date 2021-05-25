import React from 'react';
import { render } from '@testing-library/react';
import { TriStateCheckbox } from './TriStateCheckbox';

describe('TriStateCheckbox Component', () => {
    test('should display the TriStateCheckbox' , () => {
        const { container } = render(<TriStateCheckbox />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-tristatecheckbox p-component');
    })
})