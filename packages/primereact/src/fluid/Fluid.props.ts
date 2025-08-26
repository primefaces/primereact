import * as HeadlessFluid from '@primereact/headless/fluid';
import type { FluidProps } from '@primereact/types/shared/fluid';

export const defaultProps: FluidProps = {
    ...HeadlessFluid.defaultProps,
    as: 'div'
};
