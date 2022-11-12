import '@testing-library/jest-dom';
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
});
