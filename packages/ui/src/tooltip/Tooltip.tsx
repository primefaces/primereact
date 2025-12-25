'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useTooltip } from '@primereact/headless/tooltip';
import { styles } from '@primereact/styles/tooltip';
import * as React from 'react';
import { TooltipProvider } from './Tooltip.context';
import { defaultProps } from './Tooltip.props';
import { TooltipArrow } from './arrow';
import { TooltipContent } from './content';
import { TooltipGroup } from './group';
import { TooltipPortal } from './portal';
import { TooltipTrigger } from './trigger';

export const Tooltip = withComponent({
    name: 'Tooltip',
    defaultProps,
    styles,
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
    },
    components: {
        Portal: TooltipPortal,
        Trigger: TooltipTrigger,
        Content: TooltipContent,
        Arrow: TooltipArrow,
        Group: TooltipGroup
    }
});
