'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTooltip } from '@primereact/headless/tooltip';
import * as React from 'react';
import { TooltipProvider } from '../Tooltip.context';
import { defaultRootProps } from './TooltipRoot.props';

export const TooltipRoot = withComponent({
    name: 'TooltipRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const tooltip = useTooltip(instance.inProps);

        return tooltip;
    },
    render(instance) {
        const { props } = instance;

        return (
            <TooltipProvider
                // @ts-expect-error - Temporary fix for type compatibility
                value={instance}
            >
                <Component
                    as={React.Fragment}
                    // @ts-expect-error - Temporary fix for type compatibility
                    instance={instance}
                    children={props.children}
                />
            </TooltipProvider>
        );
    }
});
