import * as HeadlessToggleButton from '@primereact/headless/togglebutton';
import type { ToggleButtonRootProps } from '@primereact/types/shared/togglebutton';

export const defaultRootProps: ToggleButtonRootProps = {
    ...HeadlessToggleButton.defaultProps,
    as: 'button',
    value: undefined,
    size: undefined,
    disabled: undefined,
    invalid: false
};
