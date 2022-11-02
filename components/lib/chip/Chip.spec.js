import { fireEvent, render, within } from '@testing-library/react';
import { Chip } from './Chip';

import '@testing-library/jest-dom';

describe('Chip', () => {
    test('when removable is true it returns with remove icon', () => {
        const removeOn = jest.fn();
        const { container } = render(<Chip removable onRemove={removeOn} />);
        const chipRemoveIcon = container.getElementsByClassName('p-chip-remove-icon')[0];

        fireEvent.click(chipRemoveIcon);

        expect(container.getElementsByClassName('p-chip-remove-icon pi pi-times-circle').length).toBe(0);
        expect(removeOn).toHaveBeenCalledTimes(1);
    });

    test('when image is property it returns with image class', () => {
        const { container } = render(<Chip image={'test'} />);

        const wrapper = container.getElementsByClassName('p-chip p-component p-chip-image');
        const chipImage = within(wrapper[0]).getByRole('img');

        expect(chipImage.getAttribute('alt')).toBe('chip');
    });

    test('when icon is property it returns with icon class', () => {
        const { container } = render(<Chip icon={'pi pi-check'} />);

        const wrapper = container.getElementsByClassName('p-chip-icon');

        expect(wrapper.length).toBe(1);
    });

    test('when label is property it returns with label class', () => {
        const { container } = render(<Chip label={'test'} />);

        const label = container.getElementsByClassName('p-chip-text');

        expect(label.length).toBe(1);
    });
});
