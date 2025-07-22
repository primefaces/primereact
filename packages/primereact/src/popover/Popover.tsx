'use client';
import { Component } from '@primereact/core/component';
import { usePopover } from '@primereact/headless/popover';
import { styles } from '@primereact/styles/popover';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { PopoverClose } from './close';
import { PopoverContent } from './content';
import { PopoverProvider } from './Popover.context';
import { defaultProps } from './Popover.props';
import { PopoverPortal } from './portal';
import { PopoverTrigger } from './trigger';

export const Popover = withComponent({
    name: 'Popover',
    defaultProps,
    styles,
    setup(instance) {
        const popover = usePopover(instance.inProps);

        return popover;
    },
    render(instance) {
        const { props } = instance;

        return (
            <PopoverProvider
                // @ts-expect-error - Temporary fix for type compatibility
                value={instance}
            >
                <Component
                    // @ts-expect-error - Temporary fix for type compatibility
                    instance={instance}
                    children={props.children}
                    as={React.Fragment}
                />
            </PopoverProvider>
        );
    },
    components: {
        Portal: PopoverPortal,
        Trigger: PopoverTrigger,
        Content: PopoverContent,
        Close: PopoverClose
    }
});
