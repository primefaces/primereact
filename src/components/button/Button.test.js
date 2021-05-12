import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonComponent, Button } from './Button';

describe('Button Component', () => {
	test('should display the button', () => {
		const { container } = render(<Button />);
		const buttonElement = container.firstChild;

		expect(container).toBeInTheDocument();
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveClass('p-button');
	});

	test('should display the label', () => {
		const { container } = render(<Button label="PrimeReact" />);
		const labelElement = container.querySelector('.p-button-label');

		expect(labelElement.textContent).toContain('PrimeReact');
		expect(labelElement).toHaveClass('p-c');
	});

	test('should be disabled', () => {
		const { container } = render(<Button disabled />);
		const buttonElement = container.firstChild;

		expect(buttonElement).toHaveClass('p-disabled');
		expect(buttonElement).toHaveProperty('disabled');
	});
});
