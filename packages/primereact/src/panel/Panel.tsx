import { withComponentStyle } from '@primereact/core/component/withComponentStyle';
import { usePanel } from '@primereact/headless/panel';
import { styles } from '@primereact/styles/panel';
import * as React from 'react';

export const Panel = withComponentStyle(
    ({ props }) => {
        const panel = usePanel(props);

        return <div>TEST</div>;
    },
    defaultProps,
    styles
);
