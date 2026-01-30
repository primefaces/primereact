import * as HeadlessInputIcon from '@primereact/headless/inputicon';
import type { InputIconProps } from '@primereact/types/shared/inputicon';

export const defaultProps: InputIconProps = {
    ...HeadlessInputIcon.defaultProps,
    as: 'span'
};
