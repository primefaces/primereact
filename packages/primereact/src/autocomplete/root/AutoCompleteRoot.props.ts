import * as HeadlessAutoComplete from '@primereact/headless/autocomplete';
import type { AutoCompleteRootProps } from '@primereact/types/shared/autocomplete';

export const defaultRootProps: AutoCompleteRootProps = {
    ...HeadlessAutoComplete.defaultProps,
    as: 'div',
    invalid: undefined,
    variant: undefined,
    fluid: undefined,
    disabled: undefined,
    size: undefined,
    checkmark: false,
    tabIndex: 0,
    inputClassName: undefined
};
