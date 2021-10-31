import React from 'react';
import { render } from '@testing-library/react';
import { Calendar } from '../../components/calendar/Calendar';

describe('Calendar Component', () => {
    test('should display the Calendar' , () => {
        const { container } = render(<Calendar />);
        const calendarElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(calendarElement).toBeInTheDocument();
        expect(calendarElement).toHaveClass('p-calendar p-component');
    })
})