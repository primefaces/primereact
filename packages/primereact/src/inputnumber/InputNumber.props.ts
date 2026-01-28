import * as HeadlessInputNumber from '@primereact/headless/inputnumber';
import type { InputNumberProps } from '@primereact/types/shared/inputnumber';
import { InputText } from 'primereact/inputtext';

export const defaultProps: InputNumberProps = {
    ...HeadlessInputNumber.defaultProps,
    as: InputText
};
