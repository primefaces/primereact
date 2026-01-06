import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useInplace.props';

export const useInplace = withHeadless({
    name: 'useInplace',
    defaultProps,
    setup: ({ props }) => {
        const [activeState, setActiveState] = React.useState<boolean | undefined>(props.active);

        const state = {
            active: activeState
        };

        // methods
        const open = () => setActiveState(true);
        const close = () => setActiveState(false);

        const onActiveChange = () => {
            props?.onActiveChange?.(state.active);
        };

        return {
            state,
            open,
            close,
            onActiveChange
        };
    }
});
