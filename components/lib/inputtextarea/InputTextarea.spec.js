import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { InputTextarea } from './InputTextarea';

describe('InputTextarea', () => {
    test('when textarea is enabled then textarea accepts data entry and have filled state', async () => {
        // Arrange
        const { container } = render(<InputTextarea />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        await userEvent.type(input, 'abc');

        // Act
        expect(input).toBeEnabled();
        expect(input).toHaveValue('abc');
        expect(container).toMatchSnapshot();
    });
    test('when textarea is is autosizing and has rows and columns it is rendered correctly', () => {
        // Arrange
        const blurOn = jest.fn();
        const { container } = render(<InputTextarea autoResize rows={3} cols={12} onBlur={blurOn} />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        fireEvent.blur(input);

        // Act and Assert
        expect(blurOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot();
    });
    test('when input is blank it should not have filled state', async () => {
        // Arrange
        const { container } = render(<InputTextarea disabled={false} />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        fireEvent.input(input, { target: { value: '' } });

        // Act
        expect(input).toBeEnabled();
        expect(container).toMatchSnapshot();
    });
    test('when input is is set for validation only', async () => {
        // Arrange
        const { container } = render(<InputTextarea validateOnly keyfilter={`alpha`} />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        await userEvent.type(input, 'def');

        // Act
        expect(container).toMatchSnapshot();
    });
    test('when input is disabled it should render as disabled', async () => {
        // Arrange
        const { container } = render(<InputTextarea disabled />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        await userEvent.type(input, '123');

        // Act
        expect(input).toBeDisabled();
        expect(container).toMatchSnapshot();
    });
    test('when input is using keyfilter for integers accept integer input', async () => {
        // Arrange
        const keydownOn = jest.fn();
        const keyupOn = jest.fn();
        const { container } = render(<InputTextarea keyfilter="int" onKeyDown={keydownOn} onKeyUp={keyupOn} autoResize />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        await userEvent.type(input, '123');

        // Act
        expect(input).toHaveValue('123');
        expect(keydownOn).toHaveBeenCalledTimes(3);
        expect(keyupOn).toHaveBeenCalledTimes(3);
    });
    test('when input is using keyfilter for integers do not accept alphabetic input', async () => {
        // Arrange
        const keydownOn = jest.fn();
        const { container } = render(<InputTextarea keyfilter="int" onKeyDown={keydownOn} />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        await userEvent.type(input, 'abc');

        // Act
        expect(input).toHaveValue('');
        expect(keydownOn).toHaveBeenCalledTimes(3);
    });
    test('when input is using keyfilter for alphabetic accept paste of alphabetic values', async () => {
        // Arrange
        const pasteOn = jest.fn();
        const { container } = render(<InputTextarea keyfilter="alpha" onPaste={pasteOn} />);
        const input = container.getElementsByTagName('textarea')[0];

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
        const { container } = render(<InputTextarea keyfilter="alpha" onPaste={pasteOn} />);
        const input = container.getElementsByTagName('textarea')[0];

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
        const { container } = render(<InputTextarea ref={ref} onInput={inputOn} />);
        const input = container.getElementsByTagName('textarea')[0];

        // Act
        ref.current.value = 'Jest testing value';
        input.focus();
        await userEvent.paste(' abc');

        // Assert
        expect(input).toHaveValue('Jest testing value abc');
        expect(inputOn).toHaveBeenCalledTimes(1);
    });
});
