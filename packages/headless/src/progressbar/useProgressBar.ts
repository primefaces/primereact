import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useProgressBar.props';

export const useProgressBar = withHeadless({
    setup: () => {
        const state = {};

        return {
            state
        };
    },
    defaultProps
});
