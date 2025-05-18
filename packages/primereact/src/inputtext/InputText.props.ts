import * as HeadlessInputText from '@primereact/headless/inputtext';
import type { InputTextProps } from '@primereact/types/shared/inputtext';

export const defaultProps: InputTextProps = {
    ...HeadlessInputText.defaultProps,
    as: 'input',
    size: undefined,
    variant: undefined,
    fluid: false
};
