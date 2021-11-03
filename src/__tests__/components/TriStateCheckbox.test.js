import React from 'react';
import { render } from '@testing-library/react';
import { TriStateCheckbox } from '../../components/tristatecheckbox/TriStateCheckbox';

describe('TriStateCheckbox Component', () => {
    test('should display the TriStateCheckbox' , () => {
        const { container } = render(<TriStateCheckbox />);
        const checkboxElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).toHaveClass('p-tristatecheckbox p-component');
    })  
})