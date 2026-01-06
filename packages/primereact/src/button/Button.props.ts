import * as HeadlessButton from '@primereact/headless/button';
import type { ButtonProps } from '@primereact/types/shared/button';

export const defaultProps: ButtonProps = {
    ...HeadlessButton.defaultProps,
    as: 'button',
    size: undefined,
    severity: undefined,
    variant: undefined,
    plain: false,
    rounded: false,
    raised: false,
    iconOnly: false,
    fluid: false
};
