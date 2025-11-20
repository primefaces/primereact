'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { OrgChartCollapseButton } from '../collapsebutton';
import { OrgChartNode } from '../node/OrgChartNode';
import { OrgChartNodeContent } from '../nodecontent';
import { useOrgChartContext } from '../OrgChart.context';
import { OrgChartTree } from '../tree/OrgChartTree';
import { defaultSubtreeProps } from './OrgChartSubtree.props';

export const OrgChartSubtree = withComponent({
    name: 'OrgChartSubtree',
    defaultProps: defaultSubtreeProps,
    setup() {
        const orgchart = useOrgChartContext();

        return { orgchart };
    },
    render(instance) {
        const { props, ptmi, orgchart } = instance;

        const rootProps = mergeProps(
            {
                role: 'group',
                className: orgchart?.cx('subtree', { root: props.root })
            },
            orgchart?.ptm('subtree'),
            ptmi('root')
        );

        return (
            <Component
                instance={instance}
                attrs={rootProps}
                children={
                    orgchart?.props.children ? (
                        props.children
                    ) : (
                        <>
                            {props.items?.map((item) => (
                                <OrgChartTree key={item.key} item={item}>
                                    <OrgChartNode>
                                        <OrgChartNodeContent />
                                        <OrgChartCollapseButton />
                                    </OrgChartNode>
                                    {item.children && item.children.length > 0 && !orgchart?.isCollapsed(item) && <OrgChartSubtree items={item.children} />}
                                </OrgChartTree>
                            ))}
                        </>
                    )
                }
            />
        );
    }
});
