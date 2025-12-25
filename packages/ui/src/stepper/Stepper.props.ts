import * as HeadlessStepper from '@primereact/headless/stepper';
import type { StepperProps } from '@primereact/types/shared/stepper';

export const defaultProps: StepperProps = {
    ...HeadlessStepper.defaultProps,
    as: 'div'
};
