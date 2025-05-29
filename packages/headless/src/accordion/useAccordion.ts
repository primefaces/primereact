import { withHeadless } from '@primereact/core/headless';
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useAccordion.props';

export const useAccordion = withHeadless({
    setup: ({ props, elementRef }) => {
        const [activeItemValue, setActiveItemValue] = React.useState<string | string[] | number | number[] | undefined>(props.value);

        const isItemActive = (value: string | string[] | number | number[]): boolean => {
            return props.multiple ? Array.isArray(activeItemValue) && activeItemValue.some((item) => item === value) : activeItemValue === value;
        };

        const onClick = (newValue: string | number) => {
            updateValue(newValue);
        };

        const updateValue = (newValue: string | number) => {
            const active = isItemActive(newValue);

            if (props.multiple) {
                if (active) {
                    setActiveItemValue((oldValues) => {
                        if (Array.isArray(oldValues)) {
                            return oldValues.filter((v) => v !== newValue) as string[] | number[];
                        }

                        return [] as string[] | number[];
                    });
                } else {
                    if (activeItemValue) {
                        setActiveItemValue((oldValues) => {
                            if (Array.isArray(oldValues)) {
                                return [...oldValues, newValue] as string[] | number[];
                            }

                            return [newValue] as string[] | number[];
                        });
                    } else {
                        setActiveItemValue([newValue] as string[] | number[]);
                    }
                }
            } else {
                setActiveItemValue(active ? undefined : newValue);
            }
        };

        const onFocus = (newValue: string | number) => {
            if (props.selectOnFocus) {
                updateValue(newValue);
            }
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, newValue: string | number) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'Home':
                    onHomeKey(event);
                    break;

                case 'End':
                    onEndKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    onEnterKey(event, newValue);
                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            const nextPanel = findNextPanel(findPanel(event.currentTarget));

            if (nextPanel) {
                changeFocusedPanel(event, nextPanel);
            } else {
                onHomeKey(event);
            }

            event.preventDefault();
        };

        const onArrowUpKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            const prevPanel = findPrevPanel(findPanel(event.currentTarget));

            if (prevPanel) {
                changeFocusedPanel(event, prevPanel);
            } else {
                onEndKey(event);
            }

            event.preventDefault();
        };

        const onHomeKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            const firstPanel = findFirstPanel();

            changeFocusedPanel(event, firstPanel);
            event.preventDefault();
        };

        const onEndKey = (event: React.KeyboardEvent<HTMLButtonElement>) => {
            const lastPanel = findLastPanel();

            changeFocusedPanel(event, lastPanel);
            event.preventDefault();
        };

        const onEnterKey = (event: React.KeyboardEvent<HTMLButtonElement>, newValue: string | number) => {
            updateValue(newValue);
            event.preventDefault();
        };

        const findPanel = (headerElement: HTMLButtonElement): HTMLDivElement | null => {
            return headerElement?.closest('[data-pc-name="accordionpanel"]') as HTMLDivElement | null;
        };

        const findHeader = (panelElement: HTMLElement | null): HTMLElement | null => {
            return panelElement ? (findSingle(panelElement, '[data-pc-name="accordionheader"]') as HTMLDivElement) : null;
        };

        const findNextPanel = (panelElement: HTMLDivElement | null, selfCheck = false): HTMLElement | null => {
            if (!panelElement) return null;

            const element = selfCheck ? panelElement : (panelElement.nextElementSibling as HTMLDivElement | null);

            return element ? (getAttribute(element, 'data-p-disabled') ? findNextPanel(element) : findHeader(element)) : null;
        };

        const findPrevPanel = (panelElement: HTMLDivElement | null, selfCheck = false): HTMLElement | null => {
            if (!panelElement) return null;

            const element = selfCheck ? panelElement : (panelElement.previousElementSibling as HTMLDivElement | null);

            return element ? (getAttribute(element, 'data-p-disabled') ? findPrevPanel(element) : findHeader(element)) : null;
        };

        const findFirstPanel = (): HTMLElement | null => {
            return findNextPanel(elementRef.current?.firstElementChild as HTMLDivElement | null, true);
        };

        const findLastPanel = (): HTMLElement | null => {
            return findPrevPanel(elementRef.current?.lastElementChild as HTMLDivElement | null, true);
        };

        const changeFocusedPanel = (event: React.KeyboardEvent<HTMLButtonElement>, element: HTMLElement | null) => {
            const header = findHeader(element);

            if (header) {
                focus(header);
            }
        };

        return {
            // states
            activeItemValue,
            // methods
            isItemActive,
            onClick,
            onKeyDown,
            onFocus
        };
    },
    defaultProps
});
