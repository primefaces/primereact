import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PrimeReactProvider } from '../api/Api';
import { Calendar } from './Calendar';

describe('Calendar', () => {
    function getAllDatesOfYear(year) {
        let startDate = new Date(year, 0, 1);
        let endDate = new Date(year, 11, 31);

        let dates = [];
        let currentDate = startDate;

        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    }

    test('When the days of the year are disabled, then the years and month should be disabled', async () => {
        const { container } = render(
            <PrimeReactProvider>
                <Calendar value={new Date(2023, 11, 15)} inline view="year" disabledDates={getAllDatesOfYear(2023)} />
            </PrimeReactProvider>
        );

        const years = container.querySelectorAll('.p-yearpicker-year');

        for (const year of years) {
            if (year.innerHTML.startsWith('2023')) {
                expect(year).toHaveAttribute('data-p-disabled', 'true');
                expect(year).toHaveClass('p-disabled');
            } else {
                expect(year).toHaveAttribute('data-p-disabled', 'false');
                expect(year).not.toHaveClass('p-disabled');
            }
        }

        const { container: monthContainer } = render(
            <PrimeReactProvider>
                <Calendar value={new Date(2023, 11, 15)} inline view="month" disabledDates={getAllDatesOfYear(2023)} />
            </PrimeReactProvider>
        );

        const months = monthContainer.querySelectorAll('.p-monthpicker-month');

        for (const month of months) {
            expect(month).toHaveAttribute('data-p-disabled', 'true');
            expect(month).toHaveClass('p-disabled');
        }
    });

    test('If any day of the month is not disabled, then both the year and month can be selected', async () => {
        const disabledDates = getAllDatesOfYear(2023);

        // January and December are not disabled.
        disabledDates.shift();
        disabledDates.pop();

        const { container: yearContainer } = render(
            <PrimeReactProvider>
                <Calendar value={new Date(2023, 11, 15)} inline view="year" disabledDates={disabledDates} />
            </PrimeReactProvider>
        );
        const years = yearContainer.querySelectorAll('.p-yearpicker-year');

        for (const year of years) {
            expect(year).toHaveAttribute('data-p-disabled', 'false');
            expect(year).not.toHaveClass('p-disabled');
        }

        // month
        const { container: monthContainer } = render(
            <PrimeReactProvider>
                <Calendar value={new Date(2023, 11, 15)} inline view="month" disabledDates={disabledDates} />
            </PrimeReactProvider>
        );

        const months = monthContainer.querySelectorAll('.p-monthpicker-month');

        Array.from(months).forEach((month, index) => {
            if (index === 0 || index === 11) {
                expect(month).toHaveAttribute('data-p-disabled', 'false');
                expect(month).not.toHaveClass('p-disabled');
            } else {
                expect(month).toHaveAttribute('data-p-disabled', 'true');
                expect(month).toHaveClass('p-disabled');
            }
        });
    });
});
