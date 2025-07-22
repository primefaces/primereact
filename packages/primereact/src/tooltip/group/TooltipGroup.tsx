'use client';
import { Component } from '@primereact/core/component';
import { useTooltipGroup } from '@primereact/headless/tooltip/group';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { TooltipGroupProvider } from './TooltipGroup.context';
import { defaultGroupProps } from './TooltipGroup.props';

export const TooltipGroup = withComponent({
    name: 'TooltipGroup',
    defaultProps: defaultGroupProps,
    setup(instance) {
        const tooltipgroup = useTooltipGroup(instance.inProps);

        return tooltipgroup;
    },
    render(instance) {
        const { props, ptmi } = instance;

        const rootProps = mergeProps(ptmi('root'));

        return (
            <TooltipGroupProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </TooltipGroupProvider>
        );
    }
});
