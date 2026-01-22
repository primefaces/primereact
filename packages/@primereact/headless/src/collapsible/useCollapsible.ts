import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import * as React from 'react';
import { defaultProps } from './useCollapsible.props';

export const useCollapsible = withHeadless({
    name: 'useCollapsible',
    defaultProps,
    setup({ props }) {
        const [openState, setOpenState] = useControlledState({
            value: props.open,
            defaultValue: props.defaultOpen ?? false,
            onChange: props.onOpenChange
        });

        const state = {
            open: openState
        };

        // methods
        const toggle = (event: React.SyntheticEvent) => {
            if (openState) {
                close(event);
            } else {
                open(event);
            }
        };

        const open = (event: React.SyntheticEvent) => {
            setOpenState([
                true,
                {
                    originalEvent: event,
                    value: true
                }
            ]);

            props.onOpen?.(event);
        };

        const close = (event: React.SyntheticEvent) => {
            setOpenState([
                false,
                {
                    originalEvent: event,
                    value: false
                }
            ]);

            props.onClose?.(event);
        };

        return {
            state,
            // methods
            open,
            close,
            toggle
        };
    }
});
