import * as HeadlessKnob from '@primereact/headless/knob';
import type { KnobRootProps } from '@primereact/types/shared/knob';

export const defaultRootProps: KnobRootProps = {
    ...HeadlessKnob.defaultProps,
    as: 'div',
    tabIndex: 1,
    strokeWidth: 14,
    invalid: false,
    ariaLabelledby: undefined,
    ariaLabel: undefined
};
