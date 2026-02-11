'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultFooterProps } from './PopoverFooter.props';

export const PopoverFooter = withComponent({
    name: 'Popover.Footer',
    defaultProps: defaultFooterProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
            {
                className: popover?.cx('footer')
            },
            popover?.ptm('footer'),
            ptmi('root')
        );

        return (
            <React.Fragment>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </React.Fragment>
        );
    }
});
