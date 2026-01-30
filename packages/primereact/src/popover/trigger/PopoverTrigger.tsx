'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultTriggerProps } from './PopoverTrigger.props';

export const PopoverTrigger = withComponent({
    name: 'Popover.Trigger',
    defaultProps: defaultTriggerProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
            {
                className: popover?.cx('trigger'),
                onClick: (e: React.MouseEvent) => {
                    popover?.setOpen?.(!popover?.state.open, e.nativeEvent);
                },
                ...(popover?.state.open && { 'data-positioner-open': '' })
            },
            popover?.ptm('trigger'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} ref={popover?.setAnchorRef} />;
    }
});
