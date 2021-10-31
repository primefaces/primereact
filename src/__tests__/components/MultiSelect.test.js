import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { MultiSelect } from '../../components/multiselect/MultiSelect';

const MultiSelectTestComponent = () => {

    const [selectedCities1, setSelectedCities1] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <MultiSelect value={selectedCities1} options={cities} onChange={(e) => setSelectedCities1(e.value)} optionLabel="name" placeholder="Select a City" />
    )
}

describe('MultiSelect Component', () => {
    test('should display the MultiSelect', () => {
        const { container } = render(<MultiSelectTestComponent />);
        const multiSelectElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(multiSelectElement).toBeInTheDocument();
        expect(multiSelectElement).toHaveClass('p-multiselect p-component')
    })
})