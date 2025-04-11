import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useChip.props';

export const useChip = withHeadless({
    setup: ({ props }) => {
        const [visibleState, setVisibleState] = React.useState(true);

        const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Backspace') {
                close(event);
            }
        };

        const close = (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
            if (props.onRemove) {
                props.onRemove({
                    originalEvent: event
                });
            }

            setVisibleState(false);
        };

        return {
            visibleState,
            close,
            onKeyDown
        };
    },
    defaultProps
});
