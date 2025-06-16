import { withHeadless } from '@primereact/core/headless';
import { useTabsProps } from '@primereact/types/shared/tabs';
import { findSingle, focus, getAttribute } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useTabs.props';

export const useTabs = withHeadless({
    name: 'useTabs',
    defaultProps,
    setup: ({ props }) => {
        const [activeTabState, setActiveTabState] = React.useState<useTabsProps['value']>(props.value ?? undefined);

        const state = {
            activeTab: activeTabState
        };

        // methods
        const updateValue = (value: string | number | undefined) => {
            if (activeTabState !== value) {
                setActiveTabState(value);
                props.onValueChange?.({
                    value
                });
            }
        };

        React.useEffect(() => {
            if (props.value !== activeTabState) {
                setActiveTabState(props.value);
            }
        }, [props.value]);

        const isItemActive = (key: null | undefined | string | number): boolean => {
            if (key === null || key === undefined) return false;

            return activeTabState === key;
        };

        const findTab = (listElement: HTMLElement): HTMLElement | null => {
            return findSingle(listElement, '[data-pc-name="tab"]') as HTMLElement | null;
        };

        const findAdjacentTab = (listElement: HTMLElement, direction: 'next' | 'previous', selfCheck = false): HTMLElement | null => {
            const siblingProperty = direction === 'next' ? 'nextElementSibling' : 'previousElementSibling';
            const element = selfCheck ? listElement : (listElement[siblingProperty] as HTMLElement | null);

            if (!element) {
                return null;
            }

            if (getAttribute(element, 'data-p-disabled')) {
                return findAdjacentTab(element, direction);
            }

            return findTab(element);
        };

        const findBoundaryTab = (listRef: React.RefObject<HTMLElement | null>, boundary: 'first' | 'last'): HTMLElement | null => {
            const listElement = listRef?.current;

            if (!listElement) return null;

            const targetChild = boundary === 'first' ? listElement.firstElementChild : listElement.lastElementChild;

            if (!targetChild) return null;

            const direction = boundary === 'first' ? 'next' : 'previous';

            return findAdjacentTab(targetChild as HTMLElement, direction, true);
        };

        const focusTab = (tabRef: React.RefObject<HTMLElement | null>, tabsRef: React.RefObject<HTMLElement | null>, direction: 'next' | 'previous' | 'first' | 'last'): void => {
            const currentTab = tabRef?.current?.closest('[data-pc-name="tab"]') as HTMLElement | null;

            if (!currentTab) return;

            let targetTab: HTMLElement | null = null;

            switch (direction) {
                case 'next':
                    targetTab = findAdjacentTab(currentTab, 'next');

                    if (!targetTab) {
                        targetTab = findBoundaryTab(tabsRef, 'first');
                    }

                    break;

                case 'previous':
                    targetTab = findAdjacentTab(currentTab, 'previous');

                    if (!targetTab) {
                        targetTab = findBoundaryTab(tabsRef, 'last');
                    }

                    break;

                case 'first':
                    targetTab = findBoundaryTab(tabsRef, 'first');
                    break;

                case 'last':
                    targetTab = findBoundaryTab(tabsRef, 'last');
                    break;
            }

            if (targetTab) {
                focus(targetTab);
            }
        };

        return {
            state,
            // methods
            updateValue,
            isItemActive,
            focusTab
        };
    }
});
