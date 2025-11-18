import { withHeadless } from '@primereact/core/headless';
import { findSingle, focus, isPrintableCharacter } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useMenu.props';

export const useMenu = withHeadless({
    name: 'useMenu',
    defaultProps,
    setup({ props }) {
        const [openState, setOpenState] = React.useState<boolean>(props.open !== undefined ? props.open : (props.defaultOpen ?? false));
        const [focusedState, setFocusedState] = React.useState<boolean>(false);
        const [focusedOptionId, setFocusedOptionId] = React.useState<string>('');
        const isMouseInteractionRef = React.useRef(false);

        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const triggerRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const listRef = React.useRef<HTMLUListElement | null>(null);
        const itemRefsById = React.useRef<Map<string, HTMLElement>>(new Map());

        const state = {
            opened: openState,
            focused: focusedState,
            focusedOptionId
        };

        const registerItem = React.useCallback((id: string, ref: HTMLElement) => {
            itemRefsById.current.set(id, ref);
        }, []);

        const unregisterItem = React.useCallback((id: string) => {
            itemRefsById.current.delete(id);
        }, []);

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

        const changeVisibleState = (isVisible: boolean) => {
            setOpenState(isVisible);
            updateOpenState(isVisible);
        };

        const getFocusableItems = React.useCallback(() => {
            const items: Array<{ id: string; element: HTMLElement }> = [];

            itemRefsById.current.forEach((element, id) => {
                const isDisabled = element.getAttribute('data-p-disabled') === 'true';

                if (isDisabled) return;

                let currentElement: HTMLElement | null = element;
                let isVisible = true;

                while (currentElement && currentElement !== listRef.current) {
                    const parentList = currentElement.closest('[data-pc-name="menulist"]') as HTMLElement | null;

                    if (!parentList || parentList === listRef.current) break;

                    const trigger = parentList.previousElementSibling as HTMLElement | null;

                    if (trigger && trigger.getAttribute('aria-expanded') === 'false') {
                        isVisible = false;
                        break;
                    }

                    currentElement = parentList.parentElement;
                }

                if (!isVisible) return;

                items.push({ id, element });
            });

            return items;
        }, []);

        const changeFocusedOptionId = (id: string) => {
            // Mark as mouse interaction to prevent auto-focus in onListFocus
            isMouseInteractionRef.current = true;
            setFocusedOptionId(id);
        };

        const searchItems = (char: string) => {
            const focusableItems = getFocusableItems();

            if (focusableItems.length === 0) return;

            const startIndex = focusedOptionId ? focusableItems.findIndex((item) => item.id === focusedOptionId) + 1 : 0;
            const searchChar = char.toLowerCase();

            for (let i = startIndex; i < focusableItems.length; i++) {
                const item = focusableItems[i];
                const itemText = item.element.textContent?.trim().toLowerCase() || '';

                if (itemText.startsWith(searchChar)) {
                    setFocusedOptionId(item.id);

                    return;
                }
            }

            for (let i = 0; i < startIndex; i++) {
                const item = focusableItems[i];
                const itemText = item.element.textContent?.trim().toLowerCase() || '';

                if (itemText.startsWith(searchChar)) {
                    setFocusedOptionId(item.id);

                    return;
                }
            }
        };

        const onArrowDown = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = getFocusableItems();

            if (focusableItems.length === 0) return;

            if (!focusedOptionId) {
                setFocusedOptionId(focusableItems[0].id);

                return;
            }

            const currentIndex = focusableItems.findIndex((item) => item.id === focusedOptionId);
            const nextIndex = currentIndex < focusableItems.length - 1 ? currentIndex + 1 : 0;

            setFocusedOptionId(focusableItems[nextIndex].id);
        };

        const onArrowUp = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = getFocusableItems();

            if (focusableItems.length === 0) return;

            if (!focusedOptionId) {
                setFocusedOptionId(focusableItems[focusableItems.length - 1].id);

                return;
            }

            const currentIndex = focusableItems.findIndex((item) => item.id === focusedOptionId);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableItems.length - 1;

            setFocusedOptionId(focusableItems[prevIndex].id);
        };

        const onHome = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = getFocusableItems();

            if (focusableItems.length === 0) return;

            setFocusedOptionId(focusableItems[0].id);
        };

        const onEnd = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = getFocusableItems();

            if (focusableItems.length === 0) return;

            setFocusedOptionId(focusableItems[focusableItems.length - 1].id);
        };

        const onEnterKey = (event: React.KeyboardEvent) => {
            if (listRef?.current) {
                const element = findSingle(listRef?.current, `[id="${focusedOptionId}"]`) as HTMLElement;

                if (element) {
                    const mouseDownEvent = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });

                    element.dispatchEvent(mouseDownEvent);
                }
            }

            event.preventDefault();
        };

        const onListKeyDown = (event: React.KeyboardEvent) => {
            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.key) {
                case 'ArrowDown':
                    onArrowDown(event);

                    break;

                case 'ArrowUp':
                    onArrowUp(event);

                    break;

                case 'Home':
                    onHome(event);

                    break;

                case 'End':
                    onEnd(event);

                    break;

                case 'Enter':
                case ' ':
                    onEnterKey(event);

                    break;

                case 'ArrowLeft':
                case 'ArrowRight':
                case 'PageDown':
                case 'PageUp':
                case 'Backspace':
                case 'ShiftLeft':
                case 'ShiftRight':
                    break;

                default:
                    if (!metaKey && isPrintableCharacter(event.key)) {
                        searchItems(event.key);
                    }

                    break;
            }
        };

        const onListFocus = () => {
            setFocusedState(true);

            if (focusedOptionId === '' && !isMouseInteractionRef.current) {
                const focusableItems = getFocusableItems();

                if (focusableItems.length > 0) {
                    setFocusedOptionId(focusableItems[0].id);
                }
            }

            isMouseInteractionRef.current = false;
        };

        const onListBlur = () => {
            setFocusedState(false);
            setFocusedOptionId('');
        };

        const hide = () => {
            setOpenState(false);
            updateOpenState(false);
            setFocusedOptionId('');

            setTimeout(() => {
                if (triggerRef.current) {
                    focus(triggerRef.current.elementRef.current!);
                }
            }, 10);
        };

        const onOverlayEnter = () => {
            if (listRef.current) {
                focus(listRef.current);
            }
        };

        const onTriggerClick = () => {
            setOpenState(true);
            updateOpenState(true);
        };

        //TODO:
        const onItemClick = (event: React.MouseEvent) => {
            event.preventDefault();
            hide();
        };

        return {
            state,
            //refs
            portalRef,
            triggerRef,
            listRef,
            //methods
            registerItem,
            unregisterItem,
            changeVisibleState,
            changeFocusedOptionId,
            onListKeyDown,
            onListFocus,
            onListBlur,
            onOverlayEnter,
            onTriggerClick,
            onItemClick
        };
    }
});
