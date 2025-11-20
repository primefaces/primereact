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
        const [focusedOptionId, setFocusedOptionId] = React.useState<string | string[]>(props.composite ? [] : '');
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

        const getFocusableItemsAtCurrentLevel = React.useCallback(() => {
            const allFocusableItems = getFocusableItems();

            if (allFocusableItems.length === 0) return [];

            // Determine the root level depth by examining all items
            // Find the minimum underscore count among all items to determine root level depth
            const minDepth = Math.min(...allFocusableItems.map((item) => item.id.split('_').length));

            if (focusedOptionId.length === 0) {
                // No focus yet, return root level items
                const rootItems = allFocusableItems.filter((item) => {
                    return item.id.split('_').length === minDepth;
                });

                return rootItems;
            }

            // Get the current focused item ID
            const currentFocusedId = focusedOptionId[focusedOptionId.length - 1];
            const currentIdParts = currentFocusedId.split('_');
            const currentDepth = currentIdParts.length;

            // Filter items that are at the same level and belong to the same parent
            const levelItems = allFocusableItems.filter((item) => {
                const itemParts = item.id.split('_');

                // Must have same depth
                if (itemParts.length !== currentDepth) return false;

                // For root level
                if (currentDepth === minDepth) {
                    return itemParts.length === minDepth;
                }

                // For nested levels, check if they share the same parent path
                // Example: menu_0_1_2 and menu_0_1_3 share parent menu_0_1
                const currentParentPath = currentIdParts.slice(0, -1).join('_');
                const itemParentPath = itemParts.slice(0, -1).join('_');

                return currentParentPath === itemParentPath;
            });

            return levelItems;
        }, [props.composite, focusedOptionId, getFocusableItems]);

        const changeFocusedOptionId = (id: string) => {
            // Mark as mouse interaction to prevent auto-focus in onListFocus
            isMouseInteractionRef.current = true;

            if (props.composite) {
                setFocusedOptionId((prev) => {
                    const prevArray = Array.isArray(prev) ? prev : [];

                    if (prevArray.length === 0) {
                        return [id];
                    } else {
                        if (prevArray.includes(id)) {
                            const len = id.length;

                            const findIndex = prevArray.findIndex((val) => val.length === len);

                            if (findIndex !== -1) {
                                return [...prevArray.slice(0, findIndex), id];
                            }

                            return prevArray;
                        } else if (prevArray[prevArray.length - 1].length === id.length) {
                            return [...prevArray.slice(0, -1), id];
                        }

                        return [...prevArray, id];
                    }
                });
            } else {
                setFocusedOptionId(id);
            }
        };

        const getCurrentFocusedId = () => {
            if (props.composite && Array.isArray(focusedOptionId)) {
                return focusedOptionId[focusedOptionId.length - 1] || '';
            }

            return typeof focusedOptionId === 'string' ? focusedOptionId : '';
        };

        const searchItems = (char: string) => {
            const focusableItems = props.composite ? getFocusableItemsAtCurrentLevel() : getFocusableItems();

            if (focusableItems.length === 0) return;

            const currentFocusedId = getCurrentFocusedId();
            const startIndex = currentFocusedId ? focusableItems.findIndex((item) => item.id === currentFocusedId) + 1 : 0;
            const searchChar = char.toLowerCase();

            for (let i = startIndex; i < focusableItems.length; i++) {
                const item = focusableItems[i];
                const itemText = item.element.textContent?.trim().toLowerCase() || '';

                if (itemText.startsWith(searchChar)) {
                    if (props.composite) {
                        changeFocusedOptionId(item.id);
                    } else {
                        setFocusedOptionId(item.id);
                    }

                    return;
                }
            }

            for (let i = 0; i < startIndex; i++) {
                const item = focusableItems[i];
                const itemText = item.element.textContent?.trim().toLowerCase() || '';

                if (itemText.startsWith(searchChar)) {
                    if (props.composite) {
                        changeFocusedOptionId(item.id);
                    } else {
                        setFocusedOptionId(item.id);
                    }

                    return;
                }
            }
        };

        const onArrowDown = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = props.composite ? getFocusableItemsAtCurrentLevel() : getFocusableItems();

            if (focusableItems.length === 0) return;

            const currentFocusedId = getCurrentFocusedId();

            if (!currentFocusedId) {
                if (props.composite) {
                    changeFocusedOptionId(focusableItems[0].id);
                } else {
                    setFocusedOptionId(focusableItems[0].id);
                }

                return;
            }

            const currentIndex = focusableItems.findIndex((item) => item.id === currentFocusedId);
            const nextIndex = currentIndex < focusableItems.length - 1 ? currentIndex + 1 : 0;

            if (props.composite) {
                changeFocusedOptionId(focusableItems[nextIndex].id);
            } else {
                setFocusedOptionId(focusableItems[nextIndex].id);
            }
        };

        const onArrowUp = (event: React.KeyboardEvent) => {
            event.preventDefault();

            if (event.altKey && triggerRef.current) {
                hide();

                return;
            }

            const focusableItems = props.composite ? getFocusableItemsAtCurrentLevel() : getFocusableItems();

            if (focusableItems.length === 0) return;

            const currentFocusedId = getCurrentFocusedId();

            if (!currentFocusedId) {
                if (props.composite) {
                    changeFocusedOptionId(focusableItems[focusableItems.length - 1].id);
                } else {
                    setFocusedOptionId(focusableItems[focusableItems.length - 1].id);
                }

                return;
            }

            const currentIndex = focusableItems.findIndex((item) => item.id === currentFocusedId);
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : focusableItems.length - 1;

            if (props.composite) {
                changeFocusedOptionId(focusableItems[prevIndex].id);
            } else {
                setFocusedOptionId(focusableItems[prevIndex].id);
            }
        };

        const onArrowRight = (event: React.KeyboardEvent) => {
            if (!props.composite) return;

            event.preventDefault();

            const currentFocusedId = getCurrentFocusedId();

            if (!currentFocusedId) return;

            // Find the focused element
            const focusedElement = itemRefsById.current.get(currentFocusedId);

            if (!focusedElement) return;

            const ariaExpanded = focusedElement.getAttribute('aria-expanded');

            if (ariaExpanded !== null) {
                if (ariaExpanded === 'false') {
                    // Open the submenu by simulating mousedown
                    const mouseDownEvent = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });

                    focusedElement.dispatchEvent(mouseDownEvent);
                }

                setTimeout(() => {
                    const focusableItems = getFocusableItems();

                    const submenuItems = focusableItems.filter((item) => {
                        return item.id.startsWith(currentFocusedId + '_') && item.id.split('_').length === currentFocusedId.split('_').length + 1;
                    });

                    // Focus the first item in the submenu
                    if (submenuItems.length > 0) {
                        setFocusedOptionId((prev) => {
                            const prevArray = Array.isArray(prev) ? prev : [];

                            return [...prevArray, submenuItems[0].id];
                        });
                    }
                }, 10);
            }
        };

        const onArrowLeft = (event: React.KeyboardEvent) => {
            if (!props.composite) return;

            event.preventDefault();

            const currentFocusedId = getCurrentFocusedId();

            if (!currentFocusedId || !Array.isArray(focusedOptionId)) return;

            if (focusedOptionId.length > 1) {
                const parentTriggerId = focusedOptionId[focusedOptionId.length - 2];
                const parentTrigger = itemRefsById.current.get(parentTriggerId);

                if (parentTrigger && parentTrigger.getAttribute('aria-expanded') === 'true') {
                    // Close the submenu by simulating mousedown
                    const mouseDownEvent = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });

                    parentTrigger.dispatchEvent(mouseDownEvent);
                }
            }
        };

        const onHome = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = props.composite ? getFocusableItemsAtCurrentLevel() : getFocusableItems();

            if (focusableItems.length === 0) return;

            if (props.composite) {
                changeFocusedOptionId(focusableItems[0].id);
            } else {
                setFocusedOptionId(focusableItems[0].id);
            }
        };

        const onEnd = (event: React.KeyboardEvent) => {
            event.preventDefault();

            const focusableItems = props.composite ? getFocusableItemsAtCurrentLevel() : getFocusableItems();

            if (focusableItems.length === 0) return;

            if (props.composite) {
                changeFocusedOptionId(focusableItems[focusableItems.length - 1].id);
            } else {
                setFocusedOptionId(focusableItems[focusableItems.length - 1].id);
            }
        };

        const onEnterKey = (event: React.KeyboardEvent) => {
            if (props.composite) {
                onEscapeKey();
            }

            if (listRef?.current) {
                const currentFocusedId = getCurrentFocusedId();
                const element = findSingle(listRef?.current, `[id="${currentFocusedId}"]`) as HTMLElement;

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

        const onEscapeKey = () => {
            hideAllSubmenus();

            setTimeout(() => {
                if (triggerRef.current) {
                    focus(triggerRef.current.elementRef.current!);
                }
            }, 10);
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

                case 'ArrowRight':
                    if (props.composite) {
                        onArrowRight(event);
                    }

                    break;

                case 'ArrowLeft':
                    if (props.composite) {
                        onArrowLeft(event);
                    }

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

                case 'PageDown':
                case 'PageUp':
                case 'Backspace':
                case 'ShiftLeft':
                case 'ShiftRight':
                    break;

                case 'Escape':
                    onEscapeKey();

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

            const currentFocusedId = getCurrentFocusedId();

            if (currentFocusedId === '' && !isMouseInteractionRef.current) {
                const focusableItems = props.composite ? getFocusableItemsAtCurrentLevel() : getFocusableItems();

                if (focusableItems.length > 0) {
                    if (props.composite) {
                        changeFocusedOptionId(focusableItems[0].id);
                    } else {
                        setFocusedOptionId(focusableItems[0].id);
                    }
                }
            }

            isMouseInteractionRef.current = false;
        };

        const onListBlur = () => {
            setFocusedState(false);

            if (props.composite) {
                hideAllSubmenus();
            } else {
                // For non-composite mode, reset focus on blur
                setFocusedOptionId('');
            }
        };

        const hideAllSubmenus = () => {
            if (props.composite) {
                itemRefsById.current.forEach((element) => {
                    const ariaExpanded = element.getAttribute('aria-expanded');

                    if (ariaExpanded === 'true') {
                        const mouseDownEvent = new MouseEvent('mousedown', {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        });

                        element.dispatchEvent(mouseDownEvent);
                    }
                });

                setFocusedOptionId([]);
            } else {
                setFocusedOptionId('');
            }
        };

        const hideSubmenusAfterLevel = (targetItemId: string) => {
            if (!props.composite || !Array.isArray(focusedOptionId)) return;

            const targetLevel = targetItemId.split('_').length - 1;

            itemRefsById.current.forEach((element, elementId) => {
                const elementLevel = elementId.split('_').length - 1;
                const ariaExpanded = element.getAttribute('aria-expanded');

                if (ariaExpanded === 'true' && elementLevel >= targetLevel) {
                    const mouseDownEvent = new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    });

                    element.dispatchEvent(mouseDownEvent);
                }
            });

            setFocusedOptionId((prev) => {
                const prevArray = Array.isArray(prev) ? prev : [];

                return prevArray.filter((id) => {
                    const idLevel = id.split('_').length - 1;

                    return idLevel < targetLevel;
                });
            });
        };

        const hide = () => {
            setOpenState(false);
            updateOpenState(false);

            if (props.composite) {
                setFocusedOptionId([]);
            } else {
                setFocusedOptionId('');
            }

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

            // if (portalRef?.current?.containerRef?.current?.elementRef?.current) {
            //     const element = portalRef.current.containerRef.current.elementRef.current;

            //     element.style.overflowY = 'auto';
            // }
        };

        const onTriggerClick = () => {
            setOpenState(true);
            updateOpenState(true);
        };

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
            hideSubmenusAfterLevel,
            onListKeyDown,
            onListFocus,
            onListBlur,
            onOverlayEnter,
            onTriggerClick,
            onItemClick
        };
    }
});
