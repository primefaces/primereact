import { withHeadless } from '@primereact/core/headless';
import type { ToastEvent, ToastType } from '@primereact/types/shared/toast';
import { ToastManagerInstance } from 'primereact/toast';
import * as React from 'react';
import { defaultProps } from './useToast.props';

export const useToast = withHeadless({
    name: 'useToast',
    defaultProps,
    setup: ({ props }) => {
        const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
        const [isInteracting, setIsInteracting] = React.useState<boolean>(false);
        const [toasts, setToasts] = React.useState<ToastType[]>([]);
        const previousFocusedElement = React.useRef<HTMLElement | null>(null);

        const filteredToasts: ToastType[] = React.useMemo(() => {
            if (props.group) {
                return toasts.filter((toast) => toast.group === props.group);
            }

            return toasts.filter((toast) => !toast.group);
        }, [toasts, props.group]);

        const state = {
            isExpanded,
            isInteracting
        };

        const handleToastFocus = () => {
            const activeElement = document.activeElement;

            if (activeElement instanceof HTMLElement && !activeElement.closest('[role="dialog"][aria-live="assertive"]')) {
                previousFocusedElement.current = activeElement;
            }
        };

        const handleFocusElement = (toastElement: HTMLElement | null) => {
            const activeElement = document.activeElement;

            if (!toastElement || !(activeElement instanceof HTMLElement) || !toastElement.contains(activeElement)) {
                return;
            }

            let nextFocusableToast: HTMLElement | null = null;

            nextFocusableToast = toastElement.nextElementSibling as HTMLElement;

            if (!nextFocusableToast) {
                nextFocusableToast = toastElement.previousElementSibling as HTMLElement;
            }

            if (nextFocusableToast && nextFocusableToast.tabIndex >= 0) {
                nextFocusableToast.focus();
            } else if (previousFocusedElement.current && document.contains(previousFocusedElement.current)) {
                previousFocusedElement.current.focus();
                previousFocusedElement.current = null;
            }
        };

        const onRegionMouseEnter = () => {
            setIsExpanded(true);
        };

        const onRegionMouseMove = () => {
            setIsExpanded(true);
        };

        const onRegionMouseLeave = () => {
            if (!isInteracting) {
                setIsExpanded(false);
            }
        };

        const onRegionDragEnd = () => {
            setIsExpanded(false);
        };

        const onRegionPointerDown = (event: React.PointerEvent) => {
            const isNotDismissible = event.target instanceof HTMLElement && event.target.dataset.dismissible === 'false';

            if (isNotDismissible) return;

            setIsInteracting(true);
        };

        const onRegionPointerUp = () => {
            setIsInteracting(false);
        };

        React.useEffect(() => {
            if (filteredToasts.length <= 1) {
                setIsExpanded(false);
            }
        }, [filteredToasts]);

        React.useEffect(() => {
            const unsubscribe = ToastManagerInstance.subscribe((event: ToastEvent) => {
                switch (event.type) {
                    case 'add':
                        if (event.toast) {
                            setToasts((prev) => [event.toast!, ...prev]);
                        }

                        break;
                    case 'remove':
                        if (event.toastId) {
                            setToasts((prev) => {
                                let changed = false;
                                const next = prev.map((t) => {
                                    if (t.id !== event.toastId) return t;

                                    if (t.removed && t.height === 0) return t;

                                    changed = true;

                                    return { ...t, removed: true, height: 0 };
                                });

                                return changed ? next : prev;
                            });
                        }

                        break;

                    case 'delete':
                        if (event.toastId) {
                            setToasts((prev) => {
                                const idx = prev.findIndex((t) => t.id === event.toastId);

                                if (idx === -1) return prev;

                                return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
                            });
                        }

                        break;
                    case 'update':
                        if (event.toast) {
                            setToasts((prev) => prev.map((toast) => (toast.id === event.toast!.id ? event.toast! : toast)));
                        }

                        break;
                    case 'clear':
                        setToasts([]);
                        break;
                    default:
                        break;
                }
            });

            return unsubscribe;
        }, []);

        return {
            state,
            toasts: filteredToasts,
            onRegionMouseEnter,
            onRegionMouseMove,
            onRegionMouseLeave,
            onRegionDragEnd,
            onRegionPointerDown,
            onRegionPointerUp,
            setToasts,
            handleFocusElement,
            handleToastFocus
        };
    }
});
