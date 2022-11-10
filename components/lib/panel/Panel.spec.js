import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { snapshot } from '../../test';
import { Panel } from './Panel';

const template = (options) => {
    const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
    const className = `${options.className} justify-content-start`;
    const titleClassName = `${options.titleClassName} pl-1`;

    return (
        <div className={className}>
            <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                <span className={toggleIcon}></span>
            </button>
            <span className={titleClassName}>Header</span>
        </div>
    );
};

describe('Panel', () => {
    snapshot(<Panel />, 'default');
    snapshot(
        <Panel id="Panel" header="Simple Panel">
            Content
        </Panel>,
        'header'
    );
    snapshot(
        <Panel headerTemplate={template} toggleable>
            Content
        </Panel>,
        'headerTemplate'
    );
    test('when Panel is toggleable it will toggle when clicked', async () => {
        // Arrange
        const toggleOn = jest.fn();
        const { container } = render(
            <Panel header="Toggleable" toggleable onToggle={toggleOn}>
                <p>Lorem ipsum dolor sit amet</p>
            </Panel>
        );
        const toggler = container.getElementsByClassName('p-panel-toggler')[0];

        expect(container).toMatchSnapshot('toggleable-open');

        // Act
        await userEvent.click(toggler);

        // Assert
        expect(toggleOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot('toggleable-closed');
    });
    test('when Panel is toggleable it must expand and collapse', async () => {
        // Arrange
        const expandOn = jest.fn();
        const collapseOn = jest.fn();
        const { container } = render(
            <Panel header="Expand/Collapse" toggleable onExpand={expandOn} onCollapse={collapseOn}>
                <p>Lorem ipsum dolor sit amet</p>
            </Panel>
        );
        const toggler = container.getElementsByClassName('p-panel-toggler')[0];

        expect(container).toMatchSnapshot('expandable-open');

        // Act
        await userEvent.click(toggler);

        // Assert
        expect(expandOn).toHaveBeenCalledTimes(0);
        expect(collapseOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot('expandable-closed');

        // Act
        await userEvent.click(toggler);

        // Assert
        expect(expandOn).toHaveBeenCalledTimes(1);
        expect(collapseOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot('expandable-open');
    });
});
