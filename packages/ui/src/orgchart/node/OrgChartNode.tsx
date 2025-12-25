'use client';
import { Component, withComponent } from '@primereact/core/component';
import { cn, mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useOrgChartContext } from '../OrgChart.context';
import { useOrgChartTreeContext } from '../tree';
import { defaultNodeProps } from './OrgChartNode.props';

export const OrgChartNode = withComponent({
    name: 'OrgChartNode',
    defaultProps: defaultNodeProps,
    setup() {
        const orgchart = useOrgChartContext();
        const orgcharttree = useOrgChartTreeContext();

        return { orgchart, orgcharttree };
    },
    render(instance) {
        const { props, ptmi, orgchart, orgcharttree } = instance;

        const item = orgcharttree?.props.item;

        const { className, style, onClick, ...restHtmlProps } = item?.htmlProps || {};

        const isSelectable = orgchart?.isSelectable(item);
        const isCollapsible = orgchart?.isCollapsible(item);
        const isCollapsed = orgchart?.isCollapsed(item);
        const isSelected = orgchart?.isSelected(item);

        const nodeKey = item?.key;

        const handleNodeClick = React.useCallback(
            (event: React.MouseEvent<HTMLDivElement>) => {
                if (isSelectable && nodeKey) {
                    orgchart?.toggleNodeSelect(nodeKey);
                }

                onClick?.(event);
            },
            [isSelectable, nodeKey, orgchart, onClick]
        );

        const rootProps = mergeProps(
            {
                tabIndex: isSelectable ? 0 : -1,
                className: cn(orgchart?.cx('node'), className),
                style: { ...style, ...orgchart?.sx('node') },
                'data-collapsible': isCollapsible,
                'data-selectable': isSelectable,
                'data-collapsed': isCollapsed,
                'data-selected': isSelected,
                onClick: handleNodeClick,
                onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => orgchart?.handleNodeKeyDown(event, nodeKey),
                ...restHtmlProps
            },
            orgchart?.ptm('node'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
