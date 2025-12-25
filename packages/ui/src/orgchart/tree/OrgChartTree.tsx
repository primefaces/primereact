'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useOrgChartContext } from '../OrgChart.context';
import { OrgChartTreeProvider, useOrgChartTreeContext } from './OrgChartTree.context';
import { defaultTreeProps } from './OrgChartTree.props';

export const OrgChartTree = withComponent({
    name: 'OrgChartTree',
    defaultProps: defaultTreeProps,
    setup() {
        const orgchart = useOrgChartContext();
        const orgcharttree = useOrgChartTreeContext();
        const level = orgcharttree?.level !== undefined ? orgcharttree.level + 1 : 0;

        return { orgchart, level };
    },
    render(instance) {
        const { props, ptmi, orgchart, level } = instance;

        const rootProps = mergeProps(
            {
                role: 'treeitem',
                className: orgchart?.cx('tree'),
                'data-level': level,
                'data-collapsed': orgchart?.isCollapsed(props.item),
                'data-selected': orgchart?.isSelected(props.item),
                'data-selectable': orgchart?.isSelectable(props.item),
                'data-collapsible': orgchart?.isCollapsible(props.item),
                'aria-level': level,
                'aria-expanded': !orgchart?.isCollapsed(props.item),
                'aria-selected': orgchart?.isSelected(props.item)
            },
            orgchart?.ptm('tree'),
            ptmi('root')
        );

        return (
            <OrgChartTreeProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </OrgChartTreeProvider>
        );
    }
});
