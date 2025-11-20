'use client';
import { Component } from '@primereact/core/component';
import { TreeNode } from '@primereact/types/shared/orgchart';
import { cn, mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useOrgChartContext } from '../OrgChart.context';
import { useOrgChartTreeContext } from '../tree/OrgChartTree.context';
import { defaultNodeContentProps } from './OrgChartNodeContent.props';

export const OrgChartNodeContent = withComponent({
    name: 'OrgChartNodeContent',
    defaultProps: defaultNodeContentProps,
    setup() {
        const orgchart = useOrgChartContext();
        const orgcharttree = useOrgChartTreeContext();

        return { orgchart, orgcharttree };
    },
    render(instance) {
        const { props, ptmi, orgchart, orgcharttree } = instance;
        const item = orgcharttree?.props.item;
        const rootProps = mergeProps(
            {
                className: cn(orgchart?.cx('nodeContent'))
            },
            orgchart?.ptm('nodeContent'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children ?? (typeof item?.render === 'function' ? item.render(item as TreeNode) : item?.render) ?? item?.label} />;
    }
});
