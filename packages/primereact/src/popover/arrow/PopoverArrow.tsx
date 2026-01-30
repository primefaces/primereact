'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultArrowProps } from './PopoverArrow.props';

export const PopoverArrow = withComponent({
    name: 'Popover.Arrow',
    defaultProps: defaultArrowProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, popover, ptmi } = instance;

        const containerProps = mergeProps(
            {
                className: popover?.cx('arrow')
            },
            popover?.ptm('arrow'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={containerProps} children={props.children} ref={popover?.setArrowRef} />;
    }
});
