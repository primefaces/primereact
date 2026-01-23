import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useAccordion.props';

export type NavigationDirection = 'next' | 'previous' | 'first' | 'last';

export const useAccordion = withHeadless({
    name: 'useAccordion',
    defaultProps,
    setup({ props, elementRef }) {
        const [activeValueState, setActiveValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue ?? null,
            onChange: props.onValueChange
        });

        const state = {
            value: activeValueState
        };

        // methods
        const updateValue = (event: React.SyntheticEvent, key: null | undefined | string | number) => {
            if (key === undefined) return;

            let activeValue = activeValueState;
            const isActive = isItemActive(key);

            if (props.multiple) {
                const arrayValue = Array.isArray(activeValue) ? activeValue : [];

                activeValue = isActive ? arrayValue.filter((k) => k !== key) : key !== null && key !== undefined ? [...arrayValue, key] : arrayValue;
            } else {
                activeValue = isActive ? null : key;
            }

            setActiveValueState([
                activeValue,
                {
                    originalEvent: event,
                    value: activeValue
                }
            ]);
        };

        const isItemActive = (key: null | undefined | string | number): boolean => {
            if (key === null || key === undefined) return false;

            if (props.multiple) {
                const arrayValue = activeValueState as (string | number)[] | null | undefined;

                return Array.isArray(arrayValue) && arrayValue.includes(key as string | number);
            } else {
                return activeValueState === key;
            }
        };

        const focusPanel = (accordionHeader: HTMLElement | null, direction: NavigationDirection): void => {
            const findHeader = (panelElement: HTMLElement): HTMLElement | null => {
                return findSingle(panelElement, '[data-scope="accordion"][data-part="trigger"]') as HTMLElement | null;
            };

            const findAdjacentPanel = (panelElement: HTMLElement, direction: 'next' | 'previous', selfCheck = false): HTMLElement | null => {
                const siblingProperty = direction === 'next' ? 'nextElementSibling' : 'previousElementSibling';
                const element = selfCheck ? panelElement : (panelElement[siblingProperty] as HTMLElement | null);

                if (!element) {
                    return null;
                }

                if (getAttribute(element, 'data-disabled')) {
                    return findAdjacentPanel(element, direction);
                }

                return findHeader(element);
            };

            const findBoundaryPanel = (boundary: 'first' | 'last'): HTMLElement | null => {
                const accordionElement = elementRef?.current;

                if (!accordionElement) return null;

                const targetChild = boundary === 'first' ? accordionElement.firstElementChild : accordionElement.lastElementChild;

                if (!targetChild) return null;

                const direction = boundary === 'first' ? 'next' : 'previous';

                return findAdjacentPanel(targetChild as HTMLElement, direction, true);
            };

            const currentPanel = accordionHeader?.closest('[data-scope="accordion"][data-part="panel"]') as HTMLElement | null;

            if (!currentPanel) return;

            let targetPanel: HTMLElement | null = null;

            switch (direction) {
                case 'next':
                    targetPanel = findAdjacentPanel(currentPanel, 'next');

                    if (!targetPanel) {
                        targetPanel = findBoundaryPanel('first');
                    }

                    break;

                case 'previous':
                    targetPanel = findAdjacentPanel(currentPanel, 'previous');

                    if (!targetPanel) {
                        targetPanel = findBoundaryPanel('last');
                    }

                    break;

                case 'first':
                    targetPanel = findBoundaryPanel('first');
                    break;

                case 'last':
                    targetPanel = findBoundaryPanel('last');
                    break;
            }

            if (targetPanel) {
                focus(targetPanel);
            }
        };

        const onTriggerClick = (event: React.MouseEvent<HTMLButtonElement>, value: null | undefined | string | number) => {
            updateValue(event, value);
        };

        const onTriggerFocus = (event: React.FocusEvent<HTMLButtonElement>, value: null | undefined | string | number) => {
            if (props.openOnFocus) {
                updateValue(event, value);
            }
        };

        const onTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, value: null | undefined | string | number) => {
            switch (event.code) {
                case 'ArrowDown':
                    focusPanel(event.currentTarget, 'next');
                    break;

                case 'ArrowUp':
                    focusPanel(event.currentTarget, 'previous');
                    break;

                case 'Home':
                    focusPanel(event.currentTarget, 'first');
                    break;

                case 'End':
                    focusPanel(event.currentTarget, 'last');
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    updateValue(event, value);
                    break;

                case 'Tab':
                    return;

                default:
                    break;
            }

            event.preventDefault();
        };

        return {
            state,
            // methods
            updateValue,
            isItemActive,
            onTriggerClick,
            onTriggerFocus,
            onTriggerKeyDown
        };
    }
});
