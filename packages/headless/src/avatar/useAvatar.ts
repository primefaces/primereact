import { withHeadless } from '@primereact/core/headless';
import { defaultProps } from './useAvatar.props';

export const useAvatar = withHeadless({
    setup: ({ props }) => {
        const state = {};

        // element refs

        // methods
        const onError = () => {};

        // effects

        return {
            state,
            // element refs

            // methods
            onError
        };
    },
    defaultProps
});
