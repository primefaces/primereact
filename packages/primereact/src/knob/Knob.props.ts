import * as HeadlessKnob from '@primereact/headless/knob';
import type { KnobProps } from '@primereact/types/shared/knob';

export const defaultProps: KnobProps = {
    ...HeadlessKnob.defaultProps,
    as: 'div',
    tabIndex: 1,
    strokeWidth: 14,
    invalid: false,
    ariaLabelledby: undefined,
    ariaLabel: undefined
};
