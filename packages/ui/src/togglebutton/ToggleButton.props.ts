import * as HeadlessToggleButton from '@primereact/headless/togglebutton';
import type { ToggleButtonProps } from '@primereact/types/shared/togglebutton';

export const defaultProps: ToggleButtonProps = {
    ...HeadlessToggleButton.defaultProps,
    as: 'button',
    value: undefined,
    size: undefined,
    disabled: undefined,
    invalid: false
};
