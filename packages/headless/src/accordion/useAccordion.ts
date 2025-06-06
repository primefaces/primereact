import { withHeadless } from '@primereact/core/headless';
import type { NavigationDirection } from '@primereact/types/shared/accordion';
import { useAccordionProps } from '@primereact/types/shared/accordion';
import { findSingle, focus, getAttribute } from '@primeuix/utils/dom';
import * as React from 'react';
import { defaultProps } from './useAccordion.props';

export const useAccordion = withHeadless({
    name: 'useAccordion',
    defaultProps,
    setup({ props }) {
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

        const findBoundaryPanel = (accordionRef: React.RefObject<HTMLElement | null>, boundary: 'first' | 'last'): HTMLElement | null => {
            const accordionElement = accordionRef?.current;

            if (!accordionElement) return null;

            const targetChild = boundary === 'first' ? accordionElement.firstElementChild : accordionElement.lastElementChild;

            if (!targetChild) return null;

            const direction = boundary === 'first' ? 'next' : 'previous';

            return findAdjacentPanel(targetChild as HTMLElement, direction, true);
        };

        const focusPanel = (accordionHeaderRef: React.RefObject<HTMLElement | null>, accordionRef: React.RefObject<HTMLElement | null>, direction: NavigationDirection): void => {
            const currentPanel = accordionHeaderRef?.current?.closest('[data-pc-name="accordionpanel"]') as HTMLElement | null;

            if (!currentPanel) return;

            let targetPanel: HTMLElement | null = null;

            switch (direction) {
                case 'next':
                    targetPanel = findAdjacentPanel(currentPanel, 'next');

                    if (!targetPanel) {
                        targetPanel = findBoundaryPanel(accordionRef, 'first');
                    }

                    break;

                case 'previous':
                    targetPanel = findAdjacentPanel(currentPanel, 'previous');

                    if (!targetPanel) {
                        targetPanel = findBoundaryPanel(accordionRef, 'last');
                    }

                    break;

                case 'first':
                    targetPanel = findBoundaryPanel(accordionRef, 'first');
                    break;

                case 'last':
                    targetPanel = findBoundaryPanel(accordionRef, 'last');
                    break;
            }

            if (targetPanel) {
                focus(targetPanel);
            }
        };
        // effects

        return {
            state,
            // methods
            updateValue,
            isItemActive,
            focusPanel
        };
    }
});
