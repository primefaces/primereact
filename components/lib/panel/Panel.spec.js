import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { snapshot } from '../../test';
import { PrimeReactProvider } from '../api/Api';
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
    snapshot(
        <PrimeReactProvider>
            <Panel />
        </PrimeReactProvider>,
        'default'
    );
    snapshot(
        <PrimeReactProvider>
            <Panel id="Panel" header="Simple Panel">
                Content
            </Panel>
        </PrimeReactProvider>,
        'header'
    );
    snapshot(
        <PrimeReactProvider>
            <Panel headerTemplate={template} toggleable>
                Content
            </Panel>
        </PrimeReactProvider>,
        'headerTemplate'
    );
    test('when Panel is toggleable it will toggle when clicked', async () => {
        // Arrange
        const toggleOn = jest.fn();
        const { container } = render(
            <PrimeReactProvider>
                <Panel header="Toggleable" toggleable onToggle={toggleOn}>
                    <p>Lorem ipsum dolor sit amet</p>
                </Panel>
            </PrimeReactProvider>
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
            <PrimeReactProvider>
                <Panel header="Expand/Collapse" toggleable onExpand={expandOn} onCollapse={collapseOn}>
                    <p>Lorem ipsum dolor sit amet</p>
                </Panel>
            </PrimeReactProvider>
        );
        const toggler = container.getElementsByClassName('p-panel-toggler')[0];

        expect(container).toMatchSnapshot('expandable-open');

        // Act
        userEvent.click(toggler);

        // Assert
        await waitFor(() => {
            expect(expandOn).toHaveBeenCalledTimes(0);
            expect(collapseOn).toHaveBeenCalledTimes(1);
            expect(container).toMatchSnapshot('expandable-closed');
        });

        // Act
        userEvent.click(toggler);

        // Assert
        await waitFor(() => {
            expect(expandOn).toHaveBeenCalledTimes(1);
            expect(collapseOn).toHaveBeenCalledTimes(1);
            expect(container).toMatchSnapshot('expandable-open');
        });
    });
});
