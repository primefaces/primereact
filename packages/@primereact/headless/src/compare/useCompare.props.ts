import type { useCompareProps } from '@primereact/types/shared/compare';

export const defaultProps: useCompareProps = {
    value: undefined,
    defaultValue: 50,
    onValueChange: undefined,
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    slideOnHover: false,
    disabled: false,
    readOnly: false
};
