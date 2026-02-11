import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { usePresence } from '@primereact/hooks/use-presence';
import * as React from 'react';
import { defaultProps } from './usePopover.props';

export const usePopover = withHeadless({
    name: 'usePopover',
    defaultProps,
    setup: ({ props }) => {
        const [openState, setOpenState] = useControlledState({
            value: props.open,
            defaultValue: props.defaultOpen,
            onChange: props.onOpenChange
        });

        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
        const [positionerEl, setPositionerEl] = React.useState<HTMLDivElement | null>(null);
        const [arrowEl, setArrowEl] = React.useState<HTMLDivElement | null>(null);
        const presence = usePresence(!!openState);

        const anchorRef = React.useRef<HTMLElement>(null);
        const positionerRef = React.useRef<HTMLDivElement>(null);
        const arrowRef = React.useRef<HTMLDivElement>(null);

        const setAnchorRef = React.useCallback((node: HTMLElement | null) => {
            if (node === anchorRef.current) return;

            anchorRef.current = node;
            setAnchorEl(node);
        }, []);

        const setPositionerRef = React.useCallback((node: HTMLDivElement | null) => {
            if (node === positionerRef.current) return;

            positionerRef.current = node;
            setPositionerEl(node);
        }, []);

        const setArrowRef = React.useCallback((node: HTMLDivElement | null) => {
            if (node === arrowRef.current) return;

            arrowRef.current = node;
            setArrowEl(node);
        }, []);

        function setOpen(open: boolean, originalEvent?: Event) {
            setOpenState([
                open,
                {
                    originalEvent,
                    open
                }
            ]);
        }

        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event: Event) => {
                const positionerElement = positionerRef.current;

                if (openState && positionerElement && !positionerElement.contains(event.target as Node)) {
                    setOpen(false, event);
                }
            }
        });

        React.useEffect(() => {
            if (openState) {
                bindOutsideClickListener();
            } else {
                unbindOutsideClickListener();
            }
        }, [openState, bindOutsideClickListener, unbindOutsideClickListener]);

        const state = {
            open: openState,
            anchorEl,
            positionerEl,
            arrowEl
        };

        return {
            state,
            presence,
            setOpen,
            setArrowRef,
            setAnchorRef,
            setPositionerRef
        };
    }
});
