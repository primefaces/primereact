'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultTitleProps } from './PopoverTitle.props';

export const PopoverTitle = withComponent({
    name: 'Popover.Title',
    defaultProps: defaultTitleProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
            {
                className: popover?.cx('title')
            },
            popover?.ptm('title'),
            ptmi('root')
        );

        return (
            <React.Fragment>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </React.Fragment>
        );
    }
});
