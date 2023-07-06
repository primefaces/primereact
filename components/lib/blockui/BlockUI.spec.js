import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import * as React from 'react';
import { snapshotParent } from '../../test';
import { PrimeReactProvider } from '../api/Api';
import { Panel } from '../panel/Panel';
import { BlockUI } from './BlockUI';

describe('BlockUI', () => {
    snapshotParent(
        <PrimeReactProvider>
            <BlockUI blocked={true} fullScreen />
        </PrimeReactProvider>,
        'block fullscreen'
    );
    snapshotParent(
        <PrimeReactProvider>
            <BlockUI blocked={true}>
                <Panel>blocked</Panel>
            </BlockUI>
        </PrimeReactProvider>,
        'block panel'
    );
    snapshotParent(
        <PrimeReactProvider>
            <BlockUI blocked={false}>
                <Panel>unblocked</Panel>
            </BlockUI>
        </PrimeReactProvider>,
        'unblock panel'
    );
    test('block and unblock panel events', async () => {
        // Arrange
        const ref = React.createRef();
        const { container } = render(
            <PrimeReactProvider>
                <BlockUI ref={ref} blocked={false}>
                    <Panel>unblocked</Panel>
                </BlockUI>
            </PrimeReactProvider>
        );

        // Act
        act(() => {
            ref.current.block();
            ref.current.getElement();
        });

        // Assert
        expect(container).toMatchSnapshot('blocked-event');

        // Act
        act(() => {
            ref.current.unblock();
        });

        // Assert
        expect(container).toMatchSnapshot('unblocked-event');
    });
    test('block and unblock fullscreen events', async () => {
        // Arrange
        const ref = React.createRef();
        const { container } = render(
            <PrimeReactProvider>
                <BlockUI ref={ref} blocked={false} fullScreen></BlockUI>
            </PrimeReactProvider>
        );

        // Act
        act(() => {
            ref.current.block();
        });

        // Assert
        expect(container.parentElement).toMatchSnapshot('blocked-event-fullscreen');

        // Act
        act(() => {
            ref.current.unblock();
        });

        // Assert
        expect(container.parentElement).toMatchSnapshot('unblocked-event-fullscreen');
    });
    snapshotParent(
        <PrimeReactProvider>
            <BlockUI blocked={true} className="block-jest" style={{ cursor: 'move' }} containerClassName="container-jest" containerStyle={{ cursor: 'pointer' }}>
                <Panel>style + class</Panel>
            </BlockUI>
        </PrimeReactProvider>,
        'container style and className'
    );
});
