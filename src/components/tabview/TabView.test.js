import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { TabView, TabPanel } from './TabView';

const TabViewTestComponent = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Header I">
                Content I
            </TabPanel>
            <TabPanel header="Header II">
                Content II
            </TabPanel>
            <TabPanel header="Header III">
                Content III
            </TabPanel>
        </TabView>
    )
}

describe('TabView Component', () => {
    test('should display the TabView', () => {
        const { container } = render(<TabViewTestComponent />);
        const tabViewElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(tabViewElement).toBeInTheDocument();
        expect(tabViewElement).toHaveClass('p-tabview p-component')
    })
})