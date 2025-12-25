import * as HeadlessSwitch from '@primereact/headless/checkbox';
import type { SwitchRootProps } from '@primereact/types/shared/switch';

export const defaultRootProps: SwitchRootProps = {
    ...HeadlessSwitch.defaultProps,
    as: 'div',
    disabled: false,
    required: false,
    invalid: false,
    inputId: undefined,
    inputStyle: undefined,
    inputClassName: undefined,
    onFocus: undefined,
    onBlur: undefined
};
