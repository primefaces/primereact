import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useFluid.props';

export const useFluid = withHeadless({
    name: 'useFluid',
    defaultProps
});
