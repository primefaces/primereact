import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useProgressBar.props';

export const useProgressBar = withHeadless({
    name: 'useProgressBar',
    defaultProps,
    setup({ props }) {
        // methods
        const handleProgressValue = (value: number | undefined): number => {
            const minValue = props.min ?? 0;
            const maxValue = props.max ?? 100;

            if (minValue >= maxValue) {
                // eslint-disable-next-line no-console
                console.error('[ProgressBar] min must be less than max.');

                return 0;
            }

            const clampedValue = Math.min(Math.max(value ?? minValue, minValue), maxValue);
            const newValue = ((clampedValue - minValue) / (maxValue - minValue)) * 100;
            const boundedValue = Math.min(Math.max(newValue, 0), 100);

            return boundedValue;
        };

        const computedValue = React.useMemo(() => {
            return handleProgressValue(props.value);
        }, [props.value, props.min, props.max]);

        const formattedValue = React.useMemo(() => {
            return props.formatter?.(computedValue);
        }, [computedValue, props.formatter]);

        const state = {
            computedValue,
            formattedValue
        };

        return {
            state
        };
    }
});
