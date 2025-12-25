'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePopover } from '@primereact/headless/popover';
import * as React from 'react';
import { PopoverProvider } from '../Popover.context';
import { defaultRootProps } from './PopoverRoot.props';

export const PopoverRoot = withComponent({
    name: 'PopoverRoot',
    defaultProps: defaultRootProps,
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
    }
});
