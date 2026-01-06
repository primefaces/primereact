import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useMeterGroup.props';

export const useMeterGroup = withHeadless({
    name: 'useMeterGroup',
    defaultProps,
    setup({ props }) {
        const [totalPercentState, setTotalPercentState] = React.useState(0);

        const state = {
            totalPercent: totalPercentState
        };

        // methods
        const percent = React.useCallback((meterValue: number = 0) => {
            const min = props.min ?? 0;
            const max = props.max ?? 100;

            return Math.round(Math.max(0, Math.min(100, ((meterValue - min) / (max - min)) * 100)));
        }, []);

        const percentAsString = React.useCallback((meterValue: number = 0) => {
            return percent(meterValue) + '%';
        }, []);

        const updateTotalPercent = React.useCallback((percent: number = 0) => {
            setTotalPercentState((prev) => prev + percent);
        }, []);

        const resetTotalPercent = React.useCallback(() => {
            setTotalPercentState(0);
        }, []);

        return {
            state,
            // methods
            percent,
            percentAsString,
            updateTotalPercent,
            resetTotalPercent
        };
    }
});
