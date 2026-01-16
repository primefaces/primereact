import * as HeadlessSelect from '@primereact/headless/select';
import type { SelectRootProps } from '@primereact/types/shared/select';

export const defaultRootProps: SelectRootProps = {
    ...HeadlessSelect.defaultProps,
    as: 'div',
    invalid: undefined,
    variant: undefined,
    fluid: undefined,
    disabled: undefined,
    size: undefined,
    checkmark: false,
    tabIndex: 0
};
