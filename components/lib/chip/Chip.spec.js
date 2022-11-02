import '@testing-library/jest-dom';
import { fireEvent, render, within } from '@testing-library/react';
import { Chip } from './Chip';

describe('Chip', () => {
    test('when removable is true it returns with remove icon', () => {
        // Arrange
        const removeOn = jest.fn();
        const { container } = render(<Chip removable onRemove={removeOn} />);
        const chipRemoveIcon = container.getElementsByClassName('p-chip-remove-icon')[0];

        // Act
        fireEvent.keyDown(chipRemoveIcon, { key: 'enter', keyCode: 13 });

        // Assert
        expect(container.getElementsByClassName('p-chip-remove-icon pi pi-times-circle').length).toBe(0);
        expect(removeOn).toHaveBeenCalledTimes(1);
    });

    test('when removable is true the chip is removed when ENTER is pressed', () => {
        // Arrange
        const removeOn = jest.fn();
        const { container } = render(<Chip removable onRemove={removeOn} />);
        const chipRemoveIcon = container.getElementsByClassName('p-chip-remove-icon')[0];

        // Act
        fireEvent.click(chipRemoveIcon);

        // Assert
        expect(container.getElementsByClassName('p-chip-remove-icon pi pi-times-circle').length).toBe(0);
        expect(removeOn).toHaveBeenCalledTimes(1);
    });

    test('when image is property it returns with image class', () => {
        // Arrange
        const { container } = render(<Chip image={'test'} />);

        // Act + Assert
        const wrapper = container.getElementsByClassName('p-chip p-component p-chip-image');
        const chipImage = within(wrapper[0]).getByRole('img');

        expect(chipImage.getAttribute('alt')).toBe('chip');
    });

    test('when imageAlt property is set the alt is set', () => {
        // Arrange
        const { container } = render(<Chip image={'test'} imageAlt="jest" />);

        // Act + Assert
        const wrapper = container.getElementsByClassName('p-chip p-component p-chip-image');
        const chipImage = within(wrapper[0]).getByRole('img');

        expect(chipImage.getAttribute('alt')).toBe('jest');
    });

    test('when icon is property it returns with icon class', () => {
        // Arrange
        const { container } = render(<Chip icon={'pi pi-check'} />);

        // Act + Assert
        const icon = container.getElementsByClassName('p-chip-icon');
        const iconClass = icon[0].getAttribute('class');

        expect(iconClass).toBe('p-chip-icon pi pi-check');
    });

    test('when label is property it returns with label class', () => {
        // Arrange
        const { container } = render(<Chip label={'test'} />);

        // Act + Assert
        const label = container.getElementsByClassName('p-chip-text');
        const spanTextContent = label[0].textContent;

        expect(spanTextContent).toBe('test');
    });
});
