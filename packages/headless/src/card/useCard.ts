import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useCard.props';

export const useCard = withHeadless({
    name: 'useCard',
    defaultProps
});
