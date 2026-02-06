import * as HeadlessCompare from '@primereact/headless/compare';
import type { CompareRootProps } from '@primereact/types/shared/compare';

export const defaultRootProps: CompareRootProps = {
    ...HeadlessCompare.defaultProps,
    as: 'div',
    name: undefined,
    tabIndex: undefined,
    inputId: undefined,
    inputStyle: undefined,
    inputClassName: undefined,
    onFocus: undefined,
    onBlur: undefined
};
