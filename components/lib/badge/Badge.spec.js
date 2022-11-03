import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
    test('when value is not property it returns with dot class', () => {
        // Arrange
        const { container } = render(<Badge />);

        // Act + Assert
        expect(container.getElementsByClassName('p-badge-dot').length).toBe(1);
    });

    test('when value is property it returns with class', () => {
        // Arrange
        const { container } = render(<Badge value={22} />);
        const badge = container.getElementsByClassName('p-badge p-component')[0].textContent;

        // Act + Assert
        expect(badge).toBe('22');
    });

    test('when size as property it returns with class', () => {
        // Arrange
        const { container } = render(<Badge size={'large'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-badge p-component p-badge-lg').length).toBe(1);
    });

    test('when severity as property it returns with class', () => {
        // Arrange
        const { container } = render(<Badge severity={'success'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-badge p-component p-badge-success').length).toBe(1);
    });
});
