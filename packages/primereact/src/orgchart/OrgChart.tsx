'use client';
import { Component } from '@primereact/core/component';
import { useOrgChart } from '@primereact/headless/orgchart';
import { styles } from '@primereact/styles/orgchart';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { OrgChartCollapseButton } from './collapsebutton';
import { OrgChartNode } from './node';
import { OrgChartNodeContent } from './nodecontent';
import { OrgChartProvider } from './OrgChart.context';
import { defaultProps } from './OrgChart.props';
import { OrgChartSubtree } from './subtree';
import { OrgChartTree } from './tree';

export const OrgChart = withComponent({
    name: 'OrgChart',
    defaultProps,
    styles,
    setup(instance) {
        const orgchart = useOrgChart(instance.inProps);

        return orgchart;
    },
    render(instance) {
        const { ptmi, cx, sx, props, orgChartStyle } = instance;

        const rootProps = mergeProps(
            {
                role: 'tree',
                className: cx('root'),
                style: { ...orgChartStyle, ...sx('root') },
                'aria-multiselectable': props.selectionMode === 'multiple'
            },
            ptmi('root')
        );

        return (
            <OrgChartProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children ?? (props.value && props.value.length && props.value.length > 0 ? <OrgChartSubtree items={props.value} root /> : null)} />
            </OrgChartProvider>
        );
    },
    components: {
        Tree: OrgChartTree,
        Subtree: OrgChartSubtree,
        Node: OrgChartNode,
        NodeContent: OrgChartNodeContent,
        CollapseButton: OrgChartCollapseButton
    }
});
