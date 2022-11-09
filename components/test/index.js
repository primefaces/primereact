import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

export function snapshot(element, name) {
    test(name, () => {
        expect(render(element).container).toMatchSnapshot();
    });
}
