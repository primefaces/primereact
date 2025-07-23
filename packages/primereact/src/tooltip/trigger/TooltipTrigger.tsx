'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils/mergeprops';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useTooltipContext } from '../Tooltip.context';
import { defaultTriggerProps } from './TooltipTrigger.props';

export const TooltipTrigger = withComponent({
    name: 'TooltipTrigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const tooltip = useTooltipContext();

        return { tooltip };
    },
    render(instance) {
        const { props, ptmi, tooltip } = instance;

        const rootProps = mergeProps(
            {
                'data-open': tooltip?.state?.visible,
                'data-closed': !tooltip?.state?.visible
            },
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={tooltip?.placer?.anchorRef} />;
    }
});
