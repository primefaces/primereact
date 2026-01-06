import type { useProgressBarProps } from '@primereact/types/shared/progressbar';

export const defaultProps: useProgressBarProps = {
    value: undefined,
    max: 100,
    min: 0,
    formatter: (value: number) =>
        new Intl.NumberFormat(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(value) + '%'
};
