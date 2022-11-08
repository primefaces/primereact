import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Chip } from './Chip';

const snapshot = (props, name) => expect(render(<Chip {...props} />).container).toMatchSnapshot(name);

describe('Chip', () => {
    test('check snapshots', () => {
        snapshot({}, 'default');
        snapshot({ image: 'http://google.com/my.png' }, 'image');
        snapshot({ image: 'http://google.com/my.png', imageAlt: 'jest' }, 'image and alt');
        snapshot({ icon: 'pi pi-check' }, 'icon');
        snapshot({ label: 'jest' }, 'label');
    });
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
});
