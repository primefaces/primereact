import React from 'react';
import { render } from '@testing-library/react';
import { Splitter, SplitterPanel } from '../../components/splitter/Splitter';

describe('Splitter Component', () => {
    test('should display the Splitter', () => {
        const { container } = render(
            <Splitter style={{ height: '300px' }}>
                <SplitterPanel>
                    Panel 1
                </SplitterPanel>
                    <SplitterPanel>
                    Panel 2
                </SplitterPanel>
            </Splitter>
        );
        const splitterElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(splitterElement).toBeInTheDocument();
        expect(splitterElement).toHaveClass('p-splitter p-component')
    })
})