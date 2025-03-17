import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useButton.props';

export const useButton = withHeadless({
    setup: () => {
        return {};
    },
    defaultProps
});
