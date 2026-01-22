import * as HeadlessRadioButtonGroup from '@primereact/headless/radiobuttongroup';
import type { RadioButtonGroupProps } from '@primereact/types/shared/radiobuttongroup';

export const defaultProps: RadioButtonGroupProps = {
    ...HeadlessRadioButtonGroup.defaultProps,
    as: 'div',
    name: undefined,
    disabled: undefined,
    invalid: undefined
};
