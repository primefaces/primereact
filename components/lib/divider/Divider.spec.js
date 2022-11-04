import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
    test('when component has no properties it returns with default class', () => {
        // Arrange
        const { container } = render(<Divider />);

        // Act + Assert
        expect(container).toHaveClass('p-divider p-component p-divider-horizontal');
    });
    test('when layout and align as property it returns with class', () => {
        // Arrange
        const { container } = render(<Divider layout={'horizontal'} align={'left'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-horizontal p-divider-left').length).toBe(1);
    });
    test('when layout and align as property it returns with class', () => {
        // Arrange
        const { container } = render(<Divider layout={'horizontal'} align={'right'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-horizontal p-divider-right').length).toBe(1);
    });
    test('when layout and align as property it returns with class', () => {
        // Arrange
        const { container } = render(<Divider layout={'horizontal'} align={'center'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-horizontal p-divider-center').length).toBe(1);
    });

    test('when tpe has not any property it returns with default class', () => {
        // Arrange
        const { container } = render(<Divider />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-horizontal p-divider-solid').length).toBe(1);
    });
    test('when layout and align as property it returns with class', () => {
        // Arrange
        const { container } = render(<Divider layout={'vertical'} align={'center'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-vertical p-divider-center').length).toBe(1);
    });
    test('when layout and align as property it returns with class', () => {
        // Arrange
        const { container } = render(<Divider layout={'vertical'} align={'top'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-vertical p-divider-top').length).toBe(1);
    });
    test('when layout and align as property it returns with class', () => {
        // Arrange
        const { container } = render(<Divider layout={'vertical'} align={'bottom'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-vertical p-divider-bottom').length).toBe(1);
    });

    test('when type has no property it returns with the default class', () => {
        // Arrange
        const { container } = render(<Divider />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-solid').length).toBe(1);
    });
    test('when type is dashed it is styled as a dashed line', () => {
        // Arrange
        const { container } = render(<Divider type={'dashed'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-dashed').length).toBe(1);
    });
    test('when type is dotted is is styled as a dotted line', () => {
        // Arrange
        const { container } = render(<Divider type={'dotted'} />);

        // Act + Assert
        expect(container.getElementsByClassName('p-divider p-component p-divider-dotted').length).toBe(1);
    });
});
