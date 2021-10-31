
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { MultiStateCheckbox } from '../../components/multistatecheckbox/MultiStateCheckbox';

const MultiStateCheckboxTestComponent = () => {
    
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
    );
}

describe('MultiStateCheckbox Component', () => {
    test('should display the MultiStateCheckbox', () => {
        const { container } = render(<MultiStateCheckboxTestComponent />);
        const checkboxElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).toHaveClass('p-multistatecheckbox p-checkbox p-component')
    })
})