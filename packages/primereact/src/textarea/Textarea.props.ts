import * as HeadlessTextarea from '@primereact/headless/textarea';
import type { TextareaProps } from '@primereact/types/shared/textarea';

export const defaultProps: TextareaProps = {
    ...HeadlessTextarea.defaultProps,
    as: 'textarea',
    size: undefined,
    variant: undefined,
    fluid: undefined,
    invalid: false
};
