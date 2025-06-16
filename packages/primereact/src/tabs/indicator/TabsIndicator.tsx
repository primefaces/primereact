'use client';
import { Component } from '@primereact/core/component';
import { listStyles } from '@primereact/styles/tabs/TabsList.style';
import { findSingle, getOffset, getOuterHeight, getOuterWidth, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTabsContext } from '../Tabs.context';
import { defaultIndicatorProps } from './TabsIndicator.props';

export const TabsIndicator = withComponent({
    name: 'TabsIndicator',
    defaultProps: defaultIndicatorProps,
    styles: listStyles,
    setup() {
        const tabs = useTabsContext();

        return { tabs };
    },
    render(instance) {
        const { props, ptmi, tabs, cx } = instance;
        const [dimensionState, setDimensionState] = React.useState<React.CSSProperties>({});

        const updateInkBar = React.useCallback(() => {
            if (!tabs?.elementRef?.current) return;

            const activeTab = findSingle(tabs.elementRef.current, '[data-pc-name="tab"][data-p-active="true"]');

            if (!activeTab) return;

            // Get elements and their offsets
            const scrollContainer = tabs.elementRef.current.querySelector('[data-pc-section="content"]') as HTMLElement;

            if (!scrollContainer) return;

            const scrollLeft = scrollContainer?.scrollLeft || 0;

            const activeTabOffset = getOffset(activeTab as HTMLElement);
            const containerOffset = getOffset(tabs.elementRef.current);
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

            setDimensionState({
                '--width': tabWidth + 'px',
                '--height': tabHeight + 'px',
                '--top': relativeTop + 'px',
                '--left': relativeLeft + 'px',
                '--right': relativeRight + 'px',
                '--bottom': relativeBottom + 'px'
            } as React.CSSProperties);
        }, [tabs]);

        React.useEffect(() => {
            const timer = setTimeout(updateInkBar, 0);

            return () => clearTimeout(timer);
        }, [tabs?.state?.activeTab, updateInkBar]);

        const rootProps = mergeProps(
            {
                className: cx('activeBar'),
                style: {
                    ...dimensionState,
                    left: `var(--left)`,
                    width: `var(--width)`
                }
            },
            tabs?.ptm('activeBar'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
