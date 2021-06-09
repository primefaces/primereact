import React from 'react';
import { render } from '@testing-library/react';
import { Timeline } from './Timeline';

const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
];

describe('Timeline Component', () => {
    test('should display the Timeline', () => {
        const { container } = render(<Timeline value={events}/>);
        const timelineElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(timelineElement).toBeInTheDocument();
        expect(timelineElement).toHaveClass('p-timeline p-component');
    })
})