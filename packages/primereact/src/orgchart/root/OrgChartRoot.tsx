'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useOrgChart } from '@primereact/headless/orgchart';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { OrgChartProvider } from '../OrgChart.context';
import { defaultRootProps } from './OrgChartRoot.props';

export const OrgChartRoot = withComponent({
    name: 'OrgChartRoot',
    defaultProps: defaultRootProps,
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
    }
});
