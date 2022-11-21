import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import * as React from 'react';
import { snapshotParent } from '../../test';
import { Panel } from '../panel/Panel';
import { BlockUI } from './BlockUI';

describe('BlockUI', () => {
    snapshotParent(<BlockUI blocked={true} fullScreen />, 'block fullscreen');
    snapshotParent(
        <BlockUI blocked={true}>
            <Panel>blocked</Panel>
        </BlockUI>,
        'block panel'
    );
    snapshotParent(
        <BlockUI blocked={false}>
            <Panel>unblocked</Panel>
        </BlockUI>,
        'unblock panel'
    );
    test('block and unblock panel events', async () => {
        // Arrange
        const ref = React.createRef();
        const { container } = render(
            <BlockUI ref={ref} blocked={false}>
                <Panel>unblocked</Panel>
            </BlockUI>
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
        const { container } = render(<BlockUI ref={ref} blocked={false} fullScreen></BlockUI>);

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
        <BlockUI blocked={true} className="block-jest" style={{ cursor: 'move' }} containerClassName="container-jest" containerStyle={{ cursor: 'pointer' }}>
            <Panel>style + class</Panel>
        </BlockUI>,
        'container style and className'
    );
});
