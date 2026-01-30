'use client';
import { Component, withComponent } from '@primereact/core/component';
import { usePopover } from '@primereact/headless/popover';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { PopoverProvider } from '../Popover.context';
import { defaultRootProps } from './PopoverRoot.props';

export const PopoverRoot = withComponent({
    name: 'Popover.Root',
    defaultProps: defaultRootProps,
    setup(instance) {
        const popover = usePopover(instance.inProps);

        return popover;
    },
    render(instance) {
        const { props, ptmi } = instance;

        const rootProps = mergeProps({}, ptmi('root'));

        return (
            <PopoverProvider value={instance}>
                <Component as={React.Fragment} instance={instance} attrs={rootProps} children={props.children} />
            </PopoverProvider>
        );
    }
});
