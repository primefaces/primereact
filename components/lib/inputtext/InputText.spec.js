import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { InputText } from './InputText';

describe('InputText', () => {
    test('when input is enabled then input accepts data entry and have filled state', () => {
        // Arrange
        const { container } = render(<InputText />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        fireEvent.input(input, { target: { value: 'abc' } });

        // Act
        expect(input).toBeEnabled();
        expect(input).toHaveValue('abc');
        expect(container).toMatchSnapshot();
    });
    test('when input is blank it should not have filled state', () => {
        // Arrange
        const { container } = render(<InputText disabled={false} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        fireEvent.input(input, { target: { value: '' } });

        // Act
        expect(input).toBeEnabled();
        expect(input).toHaveValue('');
        expect(container).toMatchSnapshot();
    });
    test('when input has className only 1 className is printed', () => {
        // Arrange
        const { container } = render(<InputText className="jest" />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        fireEvent.input(input, { target: { value: 'jest' } });

        // Act
        expect(container).toMatchSnapshot();
        expect(input).toHaveValue('jest');
    });
    test('when input is is set for validation only', () => {
        // Arrange
        const { container } = render(<InputText validateOnly keyfilter={`alpha`} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        fireEvent.input(input, { target: { value: 'def' } });

        // Act
        expect(container).toMatchSnapshot();
        expect(input).toHaveValue('def');
    });
    test('when input is disabled it should render as disabled', async () => {
        // Arrange
        const { container } = render(<InputText disabled />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        await userEvent.type(input, '123');

        // Act
        expect(input).toBeDisabled();
        expect(input).toHaveValue('');
        expect(container).toMatchSnapshot();
    });
    test('when input is using keyfilter for integers accept integer input', async () => {
        // Arrange
        const keydownOn = jest.fn();
        const { container } = render(<InputText keyfilter="int" onKeyDown={keydownOn} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        await userEvent.type(input, '123');

        // Act
        expect(input).toHaveValue('123');
        expect(keydownOn).toHaveBeenCalledTimes(3);
    });
    test('when input is using keyfilter for integers do not accept alphabetic input', async () => {
        // Arrange
        const keydownOn = jest.fn();
        const { container } = render(<InputText keyfilter="int" onKeyDown={keydownOn} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        await userEvent.type(input, 'abc');

        // Act
        expect(input).toHaveValue('');
        expect(keydownOn).toHaveBeenCalledTimes(3);
    });
    test('when input is using keyfilter for alphabetic accept paste of alphabetic values', async () => {
        // Arrange
        const pasteOn = jest.fn();
        const { container } = render(<InputText keyfilter="alpha" onPaste={pasteOn} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        input.focus();
        await userEvent.paste('abc');

        // Act
        expect(input).toHaveValue('abc');
        expect(pasteOn).toHaveBeenCalledTimes(1);
    });
    test('when input is using keyfilter for alphabetic do not accept paste of integer values', async () => {
        // Arrange
        const pasteOn = jest.fn();
        const { container } = render(<InputText keyfilter="alpha" onPaste={pasteOn} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        input.focus();
        await userEvent.paste('123');

        // Act
        expect(input).toHaveValue('');
        expect(pasteOn).toHaveBeenCalledTimes(1);
    });
    test('when input is using onInput make sure it is called', async () => {
        // Arrange
        const inputOn = jest.fn();
        const ref = React.createRef();
        const { container } = render(<InputText ref={ref} onInput={inputOn} />);
        const input = container.getElementsByTagName('input')[0];

        // Act
        ref.current.value = 'Jest testing value';
        input.focus();
        await userEvent.paste(' abc');

        // Assert
        expect(input).toHaveValue('Jest testing value abc');
        expect(inputOn).toHaveBeenCalledTimes(1);
    });
});
