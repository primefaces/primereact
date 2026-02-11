'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultDescriptionProps } from './PopoverDescription.props';

export const PopoverDescription = withComponent({
    name: 'Popover.Description',
    defaultProps: defaultDescriptionProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
            {
                className: popover?.cx('description')
            },
            popover?.ptm('description'),
            ptmi('root')
        );

        return (
            <React.Fragment>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </React.Fragment>
        );
    }
});
