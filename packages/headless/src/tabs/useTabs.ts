import { withHeadless } from '@primereact/core/headless';
import { useTabsProps } from '@primereact/types/shared/tabs';
import { findSingle, focus, getAttribute, getOffset, getOuterHeight, getOuterWidth } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useTabs.props';

export const useTabs = withHeadless({
    name: 'useTabs',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const [activeTabState, setActiveTabState] = React.useState<useTabsProps['value']>(props.value ?? undefined);
        const [inkBarDimensionsState, setInkBarDimensionsState] = React.useState<React.CSSProperties>({});

        const state = {
            activeTab: activeTabState,
            inkBarDimensions: inkBarDimensionsState
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

        const updateInkBar = () => {
            const tabs = elementRef?.current;

            if (!tabs) return;

            const activeTab = findSingle(tabs, '[data-pc-section="tab"][data-p-active="true"]');

            if (!activeTab) return;

            // Get elements and their offsets
            const scrollContainer = tabs.querySelector('[data-pc-section="content"]') as HTMLElement;

            if (!scrollContainer) return;

            const scrollLeft = scrollContainer?.scrollLeft || 0;

            const activeTabOffset = getOffset(activeTab as HTMLElement);
            const containerOffset = getOffset(tabs);
            const scrollContainerOffset = getOffset(scrollContainer);

            // Get dimensions
            const tabWidth = getOuterWidth(activeTab as HTMLElement);
            const tabHeight = getOuterHeight(activeTab as HTMLElement);
            const scrollContainerHeight = getOuterHeight(scrollContainer);

            // Calculate positions
            const leftFromViewport = Number(activeTabOffset.left) - Number(scrollContainerOffset.left);
            const relativeLeft = Number(activeTabOffset.left) - Number(containerOffset.left) + scrollLeft;
            const relativeRight = scrollContainer.offsetWidth - (leftFromViewport + tabWidth);
            const relativeTop = Number(activeTabOffset.top) - Number(scrollContainerOffset.top);
            const relativeBottom = Number(scrollContainerOffset.top) + scrollContainerHeight - (tabHeight + Number(activeTabOffset.top));

            return {
                '--width': tabWidth + 'px',
                '--height': tabHeight + 'px',
                '--top': relativeTop + 'px',
                '--left': relativeLeft + 'px',
                '--right': relativeRight + 'px',
                '--bottom': relativeBottom + 'px'
            } as React.CSSProperties;
        };

        const focusTab = (tabElement: HTMLElement | null, direction: 'next' | 'previous' | 'first' | 'last'): void => {
            const findTab = (listElement: HTMLElement): HTMLElement | null => {
                return findSingle(listElement, '[data-pc-section="tab"]') as HTMLElement | null;
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

            const findBoundaryTab = (boundary: 'first' | 'last'): HTMLElement | null => {
                const listElement = findSingle(elementRef?.current as HTMLElement, '[data-pc-section="tablist"]') as HTMLElement | null;

                if (!listElement) return null;

                const tabSelector = '[data-pc-section="tab"]';
                let targetChild: HTMLElement | null = null;

                if (boundary === 'first') {
                    targetChild = listElement.querySelector(tabSelector) as HTMLElement | null;
                } else {
                    const allTabs = listElement.querySelectorAll(tabSelector);

                    targetChild = allTabs.length > 0 ? (allTabs[allTabs.length - 1] as HTMLElement) : null;
                }

                if (!targetChild) return null;

                const direction = boundary === 'first' ? 'next' : 'previous';

                return findAdjacentTab(targetChild, direction, true);
            };

            if (!tabElement) return;

            let targetTab: HTMLElement | null = null;

            switch (direction) {
                case 'next':
                    targetTab = findAdjacentTab(tabElement, 'next');

                    if (!targetTab) {
                        targetTab = findBoundaryTab('first');
                    }

                    break;

                case 'previous':
                    targetTab = findAdjacentTab(tabElement, 'previous');

                    if (!targetTab) {
                        targetTab = findBoundaryTab('last');
                    }

                    break;

                case 'first':
                    targetTab = findBoundaryTab('first');
                    break;

                case 'last':
                    targetTab = findBoundaryTab('last');
                    break;
            }

            if (targetTab) {
                focus(targetTab);
            }
        };

        const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, value: undefined | string | number) => {
            switch (event.code) {
                case 'ArrowRight':
                    focusTab(event.currentTarget, 'next');
                    break;

                case 'ArrowLeft':
                    focusTab(event.currentTarget, 'previous');
                    break;

                case 'Home':
                    focusTab(event.currentTarget, 'first');
                    break;

                case 'End':
                    focusTab(event.currentTarget, 'last');
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

        const onTabClick = (event: React.MouseEvent<HTMLButtonElement>, value: undefined | string | number) => {
            if (!props.selectOnFocus) {
                updateValue(value);
            }
        };

        const onTabFocus = (event: React.FocusEvent<HTMLButtonElement>, value: undefined | string | number) => {
            if (props.selectOnFocus) {
                updateValue(value);
            }
        };

        // effects
        React.useEffect(() => {
            const raf = requestAnimationFrame(() => {
                const dimensions = updateInkBar();

                if (dimensions) {
                    setInkBarDimensionsState(dimensions);
                }
            });

            return () => cancelAnimationFrame(raf);
        }, [activeTabState]);

        return {
            state,
            // methods
            updateValue,
            isItemActive,
            focusTab,
            onTabKeyDown,
            onTabClick,
            onTabFocus
        };
    }
});
