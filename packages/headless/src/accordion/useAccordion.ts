import { withHeadless } from '@primereact/core/headless';
import type { NavigationDirection } from '@primereact/types/shared/accordion';
import { useAccordionProps } from '@primereact/types/shared/accordion';
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useAccordion.props';

export const useAccordion = withHeadless({
    name: 'useAccordion',
    defaultProps,
    setup({ props, elementRef }) {
        const [activeValueState, setActiveValueState] = React.useState<useAccordionProps['value']>(props.value ?? props.defaultValue ?? null);

        const state = {
            value: activeValueState
        };

        // methods
        const updateValue = (key: null | undefined | string | number) => {
            if (key === undefined) return;

            let activeValue = activeValueState;
            const isActive = isItemActive(key);

            if (props.multiple) {
                const arrayValue = Array.isArray(activeValue) ? activeValue : [];

                activeValue = isActive ? arrayValue.filter((k) => k !== key) : key !== null && key !== undefined ? [...arrayValue, key] : arrayValue;
            } else {
                activeValue = isActive ? null : key;
            }

            setActiveValueState(activeValue);
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

        const focusPanel = (accordionHeader: HTMLElement | null, accordionRef: React.RefObject<HTMLElement | null>, direction: NavigationDirection): void => {
            const findHeader = (panelElement: HTMLElement): HTMLElement | null => {
                return findSingle(panelElement, '[data-pc-name="accordionheader"]') as HTMLElement | null;
            };

            const findAdjacentPanel = (panelElement: HTMLElement, direction: 'next' | 'previous', selfCheck = false): HTMLElement | null => {
                const siblingProperty = direction === 'next' ? 'nextElementSibling' : 'previousElementSibling';
                const element = selfCheck ? panelElement : (panelElement[siblingProperty] as HTMLElement | null);

                if (!element) {
                    return null;
                }

                if (getAttribute(element, 'data-p-disabled')) {
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

            const currentPanel = accordionHeader?.closest('[data-pc-name="accordionpanel"]') as HTMLElement | null;

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

        const onHeaderClick = (event: React.MouseEvent<HTMLButtonElement>, value: null | undefined | string | number) => {
            if (!props.selectOnFocus) {
                updateValue(value);
            }
        };

        const onHeaderFocus = (event: React.FocusEvent<HTMLButtonElement>, value: null | undefined | string | number) => {
            if (props.selectOnFocus) {
                updateValue(value);
            }
        };

        const onHeaderKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, value: null | undefined | string | number) => {
            switch (event.code) {
                case 'ArrowDown':
                    focusPanel(event.currentTarget, elementRef, 'next');
                    break;

                case 'ArrowUp':
                    focusPanel(event.currentTarget, elementRef, 'previous');
                    break;

                case 'Home':
                    focusPanel(event.currentTarget, elementRef, 'first');
                    break;

                case 'End':
                    focusPanel(event.currentTarget, elementRef, 'last');
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    updateValue(value);
                    break;

                case 'Tab':
                    return;

                default:
                    break;
            }

            event.preventDefault();
        };

        // effects

        return {
            state,
            // methods
            updateValue,
            isItemActive,
            onHeaderClick,
            onHeaderFocus,
            onHeaderKeyDown
        };
    }
});
