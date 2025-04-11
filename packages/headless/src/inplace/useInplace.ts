import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useInplace.props';

export const useInplace = withHeadless({
    setup: ({ props }) => {
        const [isActive, setIsActive] = React.useState<boolean>(props.active as boolean);
        const state = {
            isActive
        };
        const open = () => setIsActive(true);
        const close = () => setIsActive(false);

        const onActiveChange = () => {
            props?.onActiveChange?.(isActive);
        };

        return {
            state,
            open,
            close,
            onActiveChange
        };
    },
    defaultProps
});
