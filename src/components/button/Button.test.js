import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
	test('should display the Button', () => {
		const { container } = render(<Button />);
		const buttonElement = container.firstChild;

		expect(container).toBeInTheDocument();
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveClass('p-button');
	});

	test('should display the label', () => {
		const { container } = render(<Button label="PrimeReact" />);
		const labelElement = container.querySelector('.p-button-label');

		expect(labelElement).toBeInTheDocument();
		expect(labelElement.textContent).toContain('PrimeReact');
		expect(labelElement).toHaveClass('p-c');
	});

	test('should be disabled', () => {
		const { container } = render(<Button disabled />);
		const buttonElement = container.firstChild;

		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveClass('p-disabled');
		expect(buttonElement).toHaveProperty('disabled');
	});
});
