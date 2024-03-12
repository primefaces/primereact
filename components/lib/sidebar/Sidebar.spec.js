import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('can be made visible', () => {
        const hideOn = jest.fn();

        render(<Sidebar visible={true} onHide={hideOn} />);

        const sidebar = screen.queryByRole('complementary');

        expect(sidebar).toBeVisible();
    });
});
