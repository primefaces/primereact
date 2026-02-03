import * as HeadlessToggleButtonGroup from '@primereact/headless/togglebuttongroup';
import type { ToggleButtonGroupProps } from '@primereact/types/shared/togglebuttongroup';

export const defaultProps: ToggleButtonGroupProps = {
    ...HeadlessToggleButtonGroup.defaultProps,
    as: 'div',
    size: undefined,
    disabled: undefined,
    invalid: undefined,
    onValueChange: undefined
};
