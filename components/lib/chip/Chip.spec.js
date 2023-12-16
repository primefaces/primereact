import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Chip } from './Chip';

import { snapshot } from '../../test';

describe('Chip', () => {
    snapshot(<Chip />, 'default');
    snapshot(<Chip image="http://google.com/my.png" />, 'image');
    snapshot(<Chip image="http://google.com/my.png" imageAlt="jest" />, 'image and alt');
    snapshot(<Chip icon="pi pi-check" />, 'icon');
    snapshot(<Chip label="jest" />, 'label');
    test('when removable is true the chip is removed when ENTER is pressed', () => {
        // Arrange
        const removeOn = jest.fn();
        const { container } = render(<Chip removable onRemove={removeOn} />);

        expect(container).toMatchSnapshot('before remove');
        const chipRemoveIcon = container.getElementsByClassName('p-chip-remove-icon')[0];

        // Act
        fireEvent.keyDown(chipRemoveIcon, { key: 'Enter', code: 'Enter' });

        // Assert
        expect(container).toMatchSnapshot('after remove');
        expect(removeOn).toHaveBeenCalledTimes(1);
    });
    test('when removable is true it returns with remove icon', () => {
        // Arrange
        const removeOn = jest.fn();
        const { container } = render(<Chip removable onRemove={removeOn} />);

        expect(container).toMatchSnapshot('before remove');
        const chipRemoveIcon = container.getElementsByClassName('p-chip-remove-icon')[0];

        // Act
        fireEvent.click(chipRemoveIcon);

        // Assert
        expect(container).toMatchSnapshot('after remove');
        expect(removeOn).toHaveBeenCalledTimes(1);
    });
});
