import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useChip.props';

export const useChip = withHeadless({
    name: 'useChip',
    defaultProps,
    setup({ props }) {
        const [visibleState, setVisibleState] = React.useState<boolean>(true);

        const state = {
            visible: visibleState
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Backspace') {
                close(event);
            }
        };

        const close = (event: React.SyntheticEvent<HTMLElement>) => {
            setVisibleState(false);

            props.onRemove?.({
                originalEvent: event
            });
        };

        return {
            state,
            // methods
            close,
            removeIconProps: {
                onKeyDown
            }
        };
    }
});
