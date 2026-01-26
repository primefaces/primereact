import * as HeadlessCheckboxGroup from '@primereact/headless/checkboxgroup';
import type { CheckboxGroupProps } from '@primereact/types/shared/checkboxgroup';

export const defaultProps: CheckboxGroupProps = {
    ...HeadlessCheckboxGroup.defaultProps,
    as: 'div',
    name: undefined,
    disabled: undefined,
    invalid: undefined
};
