'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultCloseProps } from './PopoverClose.props';

export const PopoverClose = withComponent({
    name: 'Popover.Close',
    defaultProps: defaultCloseProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
            {
                type: 'button',
                className: popover?.cx('close'),
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    popover?.setOpen?.(false, e.nativeEvent);
                }
            },
            popover?.ptm('close'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
