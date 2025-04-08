import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useMeterGroup.props';

export const useMeterGroup = withHeadless({
    setup: () => {
        const state = {};

        return {
            state
        };
    },
    defaultProps
});
