import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useMenuSub.props';

export const useMenuSub = withHeadless({
    name: 'useMenuSub',
    defaultProps,
    setup({ props }) {
        const [openState, setOpenState] = React.useState<boolean>(props.open !== undefined ? props.open : (props.defaultOpen ?? false));

        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const triggerRef = React.useRef<HTMLDivElement | null>(null);
        const listRef = React.useRef<HTMLUListElement | null>(null);

        const state = {
            opened: openState
        };

        const updateOpenState = (value: boolean) => {
            if (props.onOpenChange) {
                props.onOpenChange({ value });
            }
        };

        React.useEffect(() => {
            if (props.open !== undefined) {
                setOpenState(props.open);
            }
        }, [props.open]);

        const toggle = () => {
            if (!props.disabled) {
                const newState = !openState;

                setOpenState(newState);
                updateOpenState(newState);
            }
        };

        const open = () => {
            if (!props.disabled) {
                const newState = true;

                setOpenState(newState);
                updateOpenState(newState);
            }
        };

        const close = () => {
            if (!props.disabled) {
                const newState = false;

                setOpenState(newState);
                updateOpenState(newState);
            }
        };

        const onTriggerClick = () => {
            if (!props.disabled) {
                toggle();
            }
        };

        return {
            state,
            // refs
            portalRef,
            triggerRef,
            listRef,
            // methods
            toggle,
            open,
            close,
            onTriggerClick
        };
    }
});
