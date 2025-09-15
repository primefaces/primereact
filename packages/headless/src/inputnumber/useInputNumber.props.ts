import type { useInputNumberProps } from '@primereact/types/shared/inputnumber';

export const defaultProps: useInputNumberProps = {
    value: undefined,
    defaultValue: undefined,
    format: true,
    locale: undefined,
    mode: 'decimal',
    prefix: undefined,
    suffix: undefined,
    currency: undefined,
    currencyDisplay: undefined,
    useGrouping: true,
    minFractionDigits: undefined,
    maxFractionDigits: undefined,
    roundingMode: undefined,
    min: undefined,
    max: undefined,
    step: 1,
    allowEmpty: true,
    highlightOnFocus: false,
    target: undefined,
    onValueChange: undefined,
    onChange: undefined
};
