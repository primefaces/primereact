'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultHeaderProps } from './PopoverHeader.props';

export const PopoverHeader = withComponent({
    name: 'Popover.Header',
    defaultProps: defaultHeaderProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
            {
                className: popover?.cx('header')
            },
            popover?.ptm('header'),
            ptmi('root')
        );

        return (
            <React.Fragment>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </React.Fragment>
        );
    }
});
