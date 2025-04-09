import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useMeterGroup.props';

export const useMeterGroup = withHeadless({
    setup: () => {
        const [totalPercent, setTotalPercent] = React.useState(0);

        const setPercent = (percent: number) => {
            setTotalPercent((prev) => prev + percent);
        };

        return {
            totalPercent,
            setPercent
        };
    },
    defaultProps
});
