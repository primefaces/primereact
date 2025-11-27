import { withHeadless } from '@primereact/core/headless';
import type { ToastId, ToastType } from '@primereact/types/shared/toast';
import * as React from 'react';
import { ToastStore } from './toastStore';
import { defaultProps } from './useToast.props';

export const useToast = withHeadless({
    name: 'useToast',
    defaultProps,
    setup: ({ props }) => {
        const toasts = React.useSyncExternalStore(
            (listener) => ToastStore.subscribe(listener),
            () => ToastStore.snapshot(),
            () => ToastStore.snapshot()
        );

        const filteredToasts: ToastType[] = React.useMemo(() => {
            if (props.group) {
                return toasts.filter((toast) => toast.group === props.group);
            }

            return toasts.filter((toast) => !toast.group);
        }, [toasts, props.group]);

        const [heights, setHeights] = React.useState<{ height: number; toastId: ToastId }[]>([]);
        const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
        const [isInteracting, setIsInteracting] = React.useState<boolean>(false);

        const focusWithinRef = React.useRef<boolean>(false);

        const state = {
            isExpanded,
            isInteracting,
            heights
        };

        const onRegionMouseEnter = () => {
            setIsExpanded(true);
        };

        const onRegionMouseMove = () => {
            setIsExpanded(true);
        };

        const onRegionMouseLeave = () => {
            if (!isInteracting && !focusWithinRef.current) {
                if (toasts.some((t) => t.removed === true)) return;

                setIsExpanded(false);
            }
        };

        const onRegionDragEnd = () => {
            setIsExpanded(false);
        };

        const onRegionPointerDown = (event: React.PointerEvent) => {
            if (event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false') return;

            setIsInteracting(true);
        };

        const onRegionPointerUp = () => {
            setIsInteracting(false);
        };

        const onRegionFocus = (event: React.FocusEvent<HTMLElement>) => {
            const region = event.currentTarget;
            const activeEl = document.activeElement as HTMLElement;

            if (activeEl && activeEl.matches(':focus-visible') && region.contains(activeEl)) {
                focusWithinRef.current = true;
                setIsExpanded(true);
            }
        };

        const onRegionBlur = (event: React.FocusEvent<HTMLElement>) => {
            const region = event.currentTarget;
            const related = event.relatedTarget as HTMLElement | null;

            if (related && region.contains(related)) {
                return;
            }

            focusWithinRef.current = false;

            if (isInteracting) return;

            if (toasts.some((t) => t.removed === true)) return;

            setIsExpanded(false);
        };

        const handleFocusManagement = (toastEl: HTMLElement | null) => {
            if (!toastEl) return;

            const activeEl = document.activeElement as HTMLElement;

            if (!toastEl.contains(activeEl)) {
                return;
            }

            const nextToastEl = toastEl.nextElementSibling as HTMLElement | null;
            const prevToastEl = toastEl.previousElementSibling as HTMLElement | null;

            requestAnimationFrame(() => {
                if (nextToastEl) nextToastEl.focus({ preventScroll: true });
                else if (prevToastEl) prevToastEl.focus({ preventScroll: true });
            });
        };

        React.useEffect(() => {
            if (filteredToasts.length <= 1) {
                setIsExpanded(false);
            }
        }, [filteredToasts]);

        return {
            state,
            toasts: filteredToasts,
            setHeights,
            onRegionMouseEnter,
            onRegionMouseMove,
            onRegionMouseLeave,
            onRegionDragEnd,
            onRegionPointerDown,
            onRegionPointerUp,
            onRegionFocus,
            onRegionBlur,
            handleFocusManagement
        };
    }
});
