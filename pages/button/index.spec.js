import Page from './';
import { render } from '@testing-library/react';

describe('Button', () => {
    test('Page content snapshot', () => {
        const { container } = render(<Page />);

        expect(container.getElementsByClassName('content-section implementation')).toMatchSnapshot();
    });
});
