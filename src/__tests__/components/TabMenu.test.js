import React from 'react';
import { render } from '@testing-library/react';
import { TabMenu } from '../../components/tabmenu/TabMenu';

const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];

describe('TabMenu Component', () => {
    test('should display the TabMenu', () => {
        const { container } = render(<TabMenu model={items} />);
        const menuElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('p-tabmenu p-component')
    })
})