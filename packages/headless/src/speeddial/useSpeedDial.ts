import { withHeadless } from '@primereact/core/headless';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { $dt } from '@primeuix/styled';
import { find, findSingle, focus, hasClass } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useSpeedDial.props';

export const useSpeedDial = withHeadless({
    name: 'useSpeedDial',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const listRef = React.useRef<HTMLUListElement | null>(null);
        const [visibleState, setVisibleState] = React.useState<boolean>(props.visible ?? props.defaultVisible ?? false);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<string | number>(-1);
        const isItemClicked = React.useRef(false);
        const itemCounter = React.useRef(0);
        const Math_PI = 3.14159265358979;

        const state = {
            visible: visibleState,
            focusedOptionIndex
        };

        const registerItem = React.useCallback(() => {
            const index = itemCounter.current;

            itemCounter.current += 1;

            return index;
        }, []);

        useMountEffect(() => {
            if (props.type !== 'linear') {
                const button = findSingle(elementRef.current as HTMLDivElement, '[data-pc-name="button"]') as HTMLButtonElement;
                const firstItem = findSingle(listRef.current as HTMLUListElement, '[data-pc-name="speeddialitem"]') as HTMLLIElement;

                if (button && firstItem) {
                    const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
                    const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);

                    (listRef.current as HTMLUListElement).style.setProperty($dt('item.diff.x').name, `${wDiff / 2}px`);
                    (listRef.current as HTMLUListElement).style.setProperty($dt('item.diff.y').name, `${hDiff / 2}px`);
                }
            }
        });

        useUpdateEffect(() => {
            if (visibleState) {
                if (props.hideOnClickOutside) {
                    bindDocumentClickListener();
                }
            }

            return () => {
                if (props.hideOnClickOutside) {
                    unbindDocumentClickListener();
                }
            };
        }, [visibleState]);

        useUnmountEffect(() => {
            unbindDocumentClickListener();
        });

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (visibleState && isOutsideClicked(event as unknown as React.MouseEvent)) {
                    hide();
                }

                isItemClicked.current = false;
            }
        });

        const isOutsideClicked = (event: React.MouseEvent) => {
            return elementRef.current && !(elementRef.current.isSameNode(event.target as Node) || elementRef.current.contains(event.target as Node));
        };

        const onBlur = (event: React.FocusEvent) => {
            if (!elementRef.current?.contains(event.relatedTarget as Node)) {
                setFocusedOptionIndex(-1);
            }
        };

        const onItemClick = (event: React.MouseEvent | React.KeyboardEvent) => {
            hide();

            isItemClicked.current = true;
            event.preventDefault?.();
        };

        const onItemKeyDown = (event: React.KeyboardEvent) => {
            if (event.code === 'Enter') {
                onItemClick(event);
            }
        };

        const onClick = () => {
            if (visibleState) {
                hide();
            } else {
                show();
            }

            isItemClicked.current = true;
        };

        const show = () => {
            setVisibleState(true);

            props.onVisibleChange?.({
                value: true
            });
        };

        const hide = () => {
            setVisibleState(false);

            props.onVisibleChange?.({
                value: false
            });
        };

        const calculateTransitionDelay = (index: number) => {
            const length = itemCounter.current;
            const visible = visibleState;

            return (visible ? index : length - index - 1) * (props.transitionDelay ?? 30);
        };

        const calculatePointStyle = (index: number) => {
            const type = props.type;

            if (type !== 'linear') {
                const length = itemCounter.current;
                const radius = (props.radius || length * 20) as number;

                if (type === 'circle') {
                    const step = (2 * Math_PI) / length;

                    return {
                        left: `calc(${radius * Math.cos(step * index)}px + ${$dt('item.diff.x').variable})`,
                        top: `calc(${radius * Math.sin(step * index)}px + ${$dt('item.diff.y').variable})`
                    };
                } else if (type === 'semi-circle') {
                    const direction = props.direction;
                    const step = Math_PI / (length - 1);
                    const x = `calc(${radius * Math.cos(step * index)}px + ${$dt('item.diff.x').variable})`;
                    const y = `calc(${radius * Math.sin(step * index)}px + ${$dt('item.diff.y').variable})`;

                    if (direction === 'up') {
                        return { left: x, bottom: y };
                    } else if (direction === 'down') {
                        return { left: x, top: y };
                    } else if (direction === 'left') {
                        return { right: y, top: x };
                    } else if (direction === 'right') {
                        return { left: y, top: x };
                    }
                } else if (type === 'quarter-circle') {
                    const direction = props.direction;
                    const step = Math_PI / (2 * (length - 1));
                    const x = `calc(${radius * Math.cos(step * index)}px + ${$dt('item.diff.x').variable})`;
                    const y = `calc(${radius * Math.sin(step * index)}px + ${$dt('item.diff.y').variable})`;

                    if (direction === 'up-left') {
                        return { right: x, bottom: y };
                    } else if (direction === 'up-right') {
                        return { left: x, bottom: y };
                    } else if (direction === 'down-left') {
                        return { right: y, top: x };
                    } else if (direction === 'down-right') {
                        return { left: y, top: x };
                    }
                }
            }

            return {};
        };

        const onTogglerKeydown = (event: React.KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowDown':
                case 'ArrowLeft':
                    onTogglerArrowDown(event);

                    break;

                case 'ArrowUp':
                case 'ArrowRight':
                    onTogglerArrowUp(event);

                    break;

                case 'Escape':
                    onEscapeKey();

                    break;

                default:
                    break;
            }
        };

        const onKeyDown = (event: React.KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDown(event);
                    break;

                case 'ArrowUp':
                    onArrowUp(event);
                    break;

                case 'ArrowLeft':
                    onArrowLeft(event);
                    break;

                case 'ArrowRight':
                    onArrowRight(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    onEnterKey();
                    break;

                case 'Escape':
                    onEscapeKey();
                    break;

                case 'Home':
                    onHomeKey(event);
                    break;

                case 'End':
                    onEndKey(event);
                    break;

                default:
                    break;
            }
        };

        const onTogglerArrowUp = (event: React.KeyboardEvent) => {
            show();
            navigatePrevItem(event);

            event.preventDefault();
        };

        const onTogglerArrowDown = (event: React.KeyboardEvent) => {
            show();
            navigateNextItem(event);

            event.preventDefault();
        };

        const onEnterKey = () => {
            hide();
            setFocusedOptionIndex(-1);

            const buttonEl = findSingle(elementRef.current as HTMLDivElement, 'button') as HTMLButtonElement;

            if (buttonEl) {
                focus(buttonEl);
            }
        };

        const onEscapeKey = () => {
            hide();
            setFocusedOptionIndex(-1);

            const buttonEl = findSingle(elementRef.current as HTMLDivElement, 'button') as HTMLButtonElement;

            if (buttonEl) {
                focus(buttonEl);
            }
        };

        const onArrowUp = (event: React.KeyboardEvent) => {
            if (props.direction === 'down') {
                navigatePrevItem(event);
            } else {
                navigateNextItem(event);
            }
        };

        const onArrowDown = (event: React.KeyboardEvent) => {
            if (props.direction === 'down') {
                navigateNextItem(event);
            } else {
                navigatePrevItem(event);
            }
        };

        const onArrowLeft = (event: React.KeyboardEvent) => {
            const leftValidDirections = ['left', 'up-right', 'down-left'];
            const rightValidDirections = ['right', 'up-left', 'down-right'];

            if (leftValidDirections.includes(props.direction as string)) {
                navigateNextItem(event);
            } else if (rightValidDirections.includes(props.direction as string)) {
                navigatePrevItem(event);
            } else {
                navigatePrevItem(event);
            }
        };

        const onArrowRight = (event: React.KeyboardEvent) => {
            const leftValidDirections = ['left', 'up-right', 'down-left'];
            const rightValidDirections = ['right', 'up-left', 'down-right'];

            if (leftValidDirections.includes(props.direction as string)) {
                navigatePrevItem(event);
            } else if (rightValidDirections.includes(props.direction as string)) {
                navigateNextItem(event);
            } else {
                navigateNextItem(event);
            }
        };

        const onEndKey = (event: React.KeyboardEvent) => {
            event.preventDefault();

            setFocusedOptionIndex(-1);
            navigatePrevItem(event);
        };

        const onHomeKey = (event: React.KeyboardEvent) => {
            event.preventDefault();

            setFocusedOptionIndex(-1);
            navigateNextItem(event);
        };

        const navigateNextItem = (event: React.KeyboardEvent) => {
            const optionIndex = findNextOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);

            event.preventDefault();
        };

        const navigatePrevItem = (event: React.KeyboardEvent) => {
            const optionIndex = findPrevOptionIndex(focusedOptionIndex);

            changeFocusedOptionIndex(optionIndex);

            event.preventDefault();
        };

        const changeFocusedOptionIndex = (index: number) => {
            const items = find(elementRef.current as HTMLDivElement, '[data-pc-name="speeddialitem"]');
            const filteredItems = [...items].filter((item) => {
                const element = findSingle(item, 'a');

                return element ? !hasClass(element, 'p-disabled') : true;
            });

            if (filteredItems[index]) {
                const idAttr = filteredItems[index].getAttribute('id') ?? -1;

                setFocusedOptionIndex(idAttr);

                const buttonEl = findSingle(filteredItems[index], '[type="button"]') as HTMLButtonElement;

                if (buttonEl) {
                    focus(buttonEl);
                }
            }
        };

        const findPrevOptionIndex = (index: string | number) => {
            const items = find(elementRef.current as HTMLDivElement, '[data-pc-name="speeddialitem"]');
            const filteredItems = [...items].filter((item) => {
                const element = findSingle(item, 'a');

                return element ? !hasClass(element, 'p-disabled') : true;
            });
            const newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
            let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute('id') === newIndex);

            matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;

            return matchedOptionIndex;
        };

        const findNextOptionIndex = (index: string | number) => {
            const items = find(elementRef.current as HTMLDivElement, '[data-pc-name="speeddialitem"]');
            const filteredItems = [...items].filter((item) => {
                const element = findSingle(item, 'a');

                return element ? !hasClass(element, 'p-disabled') : true;
            });

            const newIndex = index === -1 ? filteredItems[0].id : index;

            let matchedOptionIndex = filteredItems.findIndex((link) => link.getAttribute('id') === newIndex);

            matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;

            return matchedOptionIndex;
        };

        const getItemStyle = (index: number) => {
            const transitionDelay = calculateTransitionDelay(index);
            const pointStyle = calculatePointStyle(index);

            return {
                transitionDelay: `${transitionDelay}ms`,
                ...pointStyle
            };
        };

        return {
            state,
            //refs
            listRef,
            // methods
            registerItem,
            getItemStyle,
            onBlur,
            onKeyDown,
            onClick,
            onTogglerKeydown,
            onItemClick,
            onItemKeyDown
        };
    }
});
