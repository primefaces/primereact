import { withHeadless } from '@primereact/core/headless';
import { useEventListener, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { $dt } from '@primeuix/styled';
import { find, findSingle, focus } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useSpeedDial.props';

export const useSpeedDial = withHeadless({
    name: 'useSpeedDial',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const [visibleState, setVisibleState] = useControlledState({
            value: props.visible,
            defaultValue: props.defaultVisible ?? false,
            onChange: props.onVisibleChange
        });

        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<string | number>(-1);
        const listRef = React.useRef<HTMLUListElement | null>(null);
        const isItemClicked = React.useRef(false);
        const itemCounter = React.useRef(0);

        const state = {
            visible: visibleState,
            focusedOptionIndex
        };

        const registerItem = React.useCallback(() => {
            const index = itemCounter.current;

            itemCounter.current += 1;

            return index;
        }, []);

        const getItems = () => find(elementRef.current as HTMLDivElement, '[data-scope="speeddial"][data-part="item"]');
        const getItemCount = () => getItems().length;

        const focusButton = () => {
            const buttonEl = findSingle(elementRef.current as HTMLDivElement, '[data-scope="speeddial"][data-part="trigger"]') as HTMLButtonElement;

            if (buttonEl) {
                focus(buttonEl);
            }
        };

        const show = () => setVisibleState([true, { value: true }]);
        const hide = () => setVisibleState([false, { value: false }]);

        const calculateItemDiff = React.useCallback(() => {
            if (props.type !== 'linear') {
                const button = findSingle(elementRef.current as HTMLDivElement, '[data-scope="speeddial"][data-part="trigger"]') as HTMLButtonElement;
                const firstItem = findSingle(listRef.current as HTMLUListElement, '[data-scope="speeddial"][data-part="item"]') as HTMLLIElement;

                if (button && firstItem) {
                    const wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
                    const hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);

                    (listRef.current as HTMLUListElement).style.setProperty($dt('item.diff.x').name, `${wDiff / 2}px`);
                    (listRef.current as HTMLUListElement).style.setProperty($dt('item.diff.y').name, `${hDiff / 2}px`);
                }
            }
        }, [props.type, elementRef]);

        const [bindDocumentClickListener, unbindDocumentClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                const target = event.target as Node;
                const isOutside = elementRef.current && !elementRef.current.contains(target);

                if (visibleState && isOutside) {
                    hide();
                }

                isItemClicked.current = false;
            }
        });

        useUpdateEffect(() => {
            if (visibleState) {
                requestAnimationFrame(calculateItemDiff);

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

        const calculateTransitionDelay = (index: number) => {
            const length = getItemCount();

            return (visibleState ? index : length - index - 1) * (props.transitionDelay ?? 30);
        };

        const calculatePointStyle = (index: number): React.CSSProperties => {
            const { type, direction, radius: propRadius } = props;

            if (type === 'linear') {
                return {};
            }

            const length = getItemCount();
            const radius = (propRadius || length * 20) as number;
            const diffX = $dt('item.diff.x').variable;
            const diffY = $dt('item.diff.y').variable;

            const createCoord = (value: number) => `calc(${value}px + ${diffX})`;
            const createCoordY = (value: number) => `calc(${value}px + ${diffY})`;

            if (type === 'circle') {
                const step = (2 * Math.PI) / length;

                return {
                    left: createCoord(radius * Math.cos(step * index)),
                    top: createCoordY(radius * Math.sin(step * index))
                };
            }

            const stepDivisor = type === 'semi-circle' ? length - 1 : 2 * (length - 1);
            const step = Math.PI / stepDivisor;
            const x = createCoord(radius * Math.cos(step * index));
            const y = createCoordY(radius * Math.sin(step * index));

            const pointStyleMap: Record<string, Record<string, (x: string, y: string) => React.CSSProperties>> = {
                'semi-circle': {
                    up: (x, y) => ({ left: x, bottom: y }),
                    down: (x, y) => ({ left: x, top: y }),
                    left: (x, y) => ({ right: y, top: x }),
                    right: (x, y) => ({ left: y, top: x })
                },
                'quarter-circle': {
                    'up-left': (x, y) => ({ right: x, bottom: y }),
                    'up-right': (x, y) => ({ left: x, bottom: y }),
                    'down-left': (x, y) => ({ right: y, top: x }),
                    'down-right': (x, y) => ({ left: y, top: x })
                }
            };

            const styleMapper = pointStyleMap[type as string]?.[direction as string];

            return styleMapper ? styleMapper(x, y) : {};
        };

        const getItemStyle = (index: number) => ({
            transitionDelay: `${calculateTransitionDelay(index)}ms`,
            ...calculatePointStyle(index)
        });

        const findOptionIndex = (direction: 'next' | 'prev') => {
            const items = getItems();
            const isNext = direction === 'next';
            const fallbackIndex = isNext ? 0 : items.length - 1;
            // const newIndex = index === -1 ? items[fallbackIndex]?.id : index;
            // const matchedIndex = items.findIndex((item) => item.getAttribute('id') === newIndex);

            return focusedOptionIndex === -1 ? fallbackIndex : (focusedOptionIndex as number) + (isNext ? 1 : -1);
        };

        const changeFocusedOptionIndex = (index: number) => {
            const items = getItems();

            if (items[index]) {
                setFocusedOptionIndex(index ?? -1);

                const buttonEl = findSingle(items[index], '[type="button"]') as HTMLButtonElement;

                if (buttonEl) {
                    focus(buttonEl);
                }
            }
        };

        const navigate = (event: React.KeyboardEvent, direction: 'next' | 'prev') => {
            const optionIndex = findOptionIndex(direction);

            changeFocusedOptionIndex(optionIndex);
            event.preventDefault();
        };

        const hideAndFocusButton = () => {
            hide();
            setFocusedOptionIndex(-1);
            focusButton();
        };

        const onTriggerClick = () => {
            if (visibleState) {
                hide();
            } else {
                show();
            }

            isItemClicked.current = true;
        };

        const onTriggerKeyDown = (event: React.KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowDown':
                case 'ArrowLeft':
                    show();
                    navigate(event, 'next');
                    break;

                case 'ArrowUp':
                case 'ArrowRight':
                    show();
                    navigate(event, 'prev');
                    break;

                case 'Escape':
                    hideAndFocusButton();
                    break;
            }
        };

        const onKeyDown = (event: React.KeyboardEvent) => {
            const direction = props.direction as string;
            const leftDirections = ['left', 'up-right', 'down-left'];
            const rightDirections = ['right', 'up-left', 'down-right'];

            switch (event.code) {
                case 'ArrowDown':
                    if (direction === 'down') {
                        navigate(event, 'next');
                    } else {
                        navigate(event, 'prev');
                    }

                    break;

                case 'ArrowUp':
                    if (direction === 'down') {
                        navigate(event, 'prev');
                    } else {
                        navigate(event, 'next');
                    }

                    break;

                case 'ArrowLeft':
                    if (leftDirections.includes(direction) || direction === 'down') {
                        navigate(event, 'next');
                    } else {
                        navigate(event, 'prev');
                    }

                    break;

                case 'ArrowRight':
                    if (rightDirections.includes(direction) || direction === 'up') {
                        navigate(event, 'next');
                    } else {
                        navigate(event, 'prev');
                    }

                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                case 'Escape':
                    hideAndFocusButton();
                    break;

                case 'Home':
                    setFocusedOptionIndex(-1);
                    navigate(event, 'next');
                    break;

                case 'End':
                    setFocusedOptionIndex(-1);
                    navigate(event, 'prev');
                    break;
            }
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

        return {
            state,
            //refs
            listRef,
            // methods
            registerItem,
            getItemStyle,
            onBlur,
            onKeyDown,
            onTriggerClick,
            onTriggerKeyDown,
            onItemClick,
            onItemKeyDown
        };
    }
});
