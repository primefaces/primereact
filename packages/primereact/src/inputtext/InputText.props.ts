import * as HeadlessInputText from '@primereact/headless/inputtext';
import type { InputTextProps } from '@primereact/types/shared/inputtext';

export const defaultProps: InputTextProps = {
    ...HeadlessInputText.defaultProps,
    __TYPE: 'InputText',
    name: undefined,
    size: undefined,
    variant: undefined,
    invalid: false,
    onInput: undefined
};
