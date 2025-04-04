import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useBadge.props';

export const useBadge = withHeadless({
    setup: () => {
        const state = {};

        return {
            state
        };
    },
    defaultProps
});
