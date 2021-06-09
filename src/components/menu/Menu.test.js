import React from 'react';
import { render } from '@testing-library/react';
import { Menu } from './Menu'

let items = [
    {label: 'New', icon: 'pi pi-fw pi-plus'},
    {label: 'Delete', icon: 'pi pi-fw pi-trash'}
];
 

describe('Menu Component', () => {
    test('should display the Menu' , () => {
        const { container } = render(<Menu model={items} />);
        const menuElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('p-menu p-component')
    })
})