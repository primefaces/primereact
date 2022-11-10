import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { snapshot } from '../../test';
import { Fieldset } from './Fieldset';

describe('Fieldset', () => {
    snapshot(<Fieldset />, 'default');
    snapshot(
        <Fieldset id="fieldset" legend="Simple Fieldset">
            Content
        </Fieldset>,
        'legend'
    );
    test('when Fieldset is toggleable it will toggle when clicked', async () => {
        // Arrange
        const toggleOn = jest.fn();
        const { container } = render(
            <Fieldset legend="Toggleable" toggleable onToggle={toggleOn}>
                <p>Lorem ipsum dolor sit amet</p>
            </Fieldset>
        );
        const legend = container.getElementsByClassName('p-fieldset-legend')[0];

        expect(container).toMatchSnapshot('toggleable-open');

        // Act
        await userEvent.click(legend);

        // Assert
        expect(toggleOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot('toggleable-closed');
    });
    test('when Fieldset is toggleable it must expand and collapse', async () => {
        // Arrange
        const expandOn = jest.fn();
        const collapseOn = jest.fn();
        const { container } = render(
            <Fieldset legend="Expand/Collapse" toggleable onExpand={expandOn} onCollapse={collapseOn}>
                <p>Lorem ipsum dolor sit amet</p>
            </Fieldset>
        );
        const legend = container.getElementsByClassName('p-fieldset-legend')[0];

        expect(container).toMatchSnapshot('expandable-open');

        // Act
        await userEvent.click(legend);

        // Assert
        expect(expandOn).toHaveBeenCalledTimes(0);
        expect(collapseOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot('expandable-closed');

        // Act
        await userEvent.click(legend);

        // Assert
        expect(expandOn).toHaveBeenCalledTimes(1);
        expect(collapseOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot('expandable-open');
    });
});
