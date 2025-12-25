import * as HeadlessStepper from '@primereact/headless/stepper';
import type { StepperRootProps } from '@primereact/types/shared/stepper';

export const defaultRootProps: StepperRootProps = {
    ...HeadlessStepper.defaultProps,
    as: 'div'
};
