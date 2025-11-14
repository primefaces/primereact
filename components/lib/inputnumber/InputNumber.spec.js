import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { InputNumber } from './InputNumber';

function getButtons(container) {
    const inc = container.querySelector('[data-pc-section="incrementbutton"]') || container.querySelector('.p-inputnumber-button-up');

    const dec = container.querySelector('[data-pc-section="decrementbutton"]') || container.querySelector('.p-inputnumber-button-down');

    return { inc, dec };
}

describe('InputNumber decimal precision and stepping', () => {
    test('increments correctly with step=0.25', async () => {
        const { container } = render(<InputNumber step={0.25} showButtons mode="decimal" />);

        const input = container.querySelector('input');
        const { inc } = getButtons(container);

        await userEvent.click(inc);
        expect(Number(input.value)).toBeCloseTo(0.25);

        await userEvent.click(inc);
        expect(Number(input.value)).toBeCloseTo(0.5);
    });

    test('handles scientific notation by setting value prop', () => {
        const tiny = 1e-7;

        const { container, rerender } = render(<InputNumber value={tiny} mode="decimal" />);

        const input = container.querySelector('input');

        expect(Number(input.value)).toBeCloseTo(tiny);

        rerender(<InputNumber value={tiny * 2} mode="decimal" maxFractionDigits={15} />);
        expect(Number(input.value)).toBeCloseTo(2e-7);
    });

    test('handles large decimals (many fraction digits) within precision cap', () => {
        const num = 0.123456789012345;

        const { container } = render(<InputNumber value={num} mode="decimal" maxFractionDigits={15} />);

        const input = container.querySelector('input');

        expect(Number(input.value)).toBeCloseTo(num, 12);
    });

    test('caps precision at safe 15 decimals', () => {
        const tooPrecise = 0.1234567890123456;

        const { container } = render(<InputNumber value={tooPrecise} mode="decimal" maxFractionDigits={15} />);

        const input = container.querySelector('input');

        expect(Number(input.value)).toBeCloseTo(0.123456789012346);
    });

    test('small step accumulation remains precise', async () => {
        const { container } = render(<InputNumber step={0.01} showButtons mode="decimal" />);

        const input = container.querySelector('input');
        const { inc } = getButtons(container);

        for (let i = 0; i < 11; i++) await userEvent.click(inc);

        expect(Number(input.value)).toBeCloseTo(0.11);
    });

    test('invalid values (NaN, Infinity) do not break controlled value', () => {
        const { container, rerender } = render(<InputNumber value={0} mode="decimal" />);

        const input = container.querySelector('input');

        rerender(<InputNumber value={Infinity} mode="decimal" />);
        expect(Number.isFinite(input.value)).toBe(false);

        rerender(<InputNumber value={NaN} mode="decimal" />);
        expect(Number.isNaN(Number(input.value))).toBe(true);
    });

    test('step works after setting initial value programmatically', async () => {
        const { container, rerender } = render(<InputNumber value={0.5} step={0.25} showButtons mode="decimal" />);

        const input = container.querySelector('input');
        const { inc, dec } = getButtons(container);

        expect(Number(input.value)).toBeCloseTo(0.5);

        await userEvent.click(inc);
        expect(Number(input.value)).toBeCloseTo(0.75);

        rerender(<InputNumber value={1.0} step={0.25} showButtons mode="decimal" />);

        await userEvent.click(dec);
        expect(Number(input.value)).toBeCloseTo(0.75);
    });
});
