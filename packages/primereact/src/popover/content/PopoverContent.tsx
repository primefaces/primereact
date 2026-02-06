'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultContentProps } from './PopoverContent.props';

export const PopoverContent = withComponent({
    name: 'Popover.Content',
    defaultProps: defaultContentProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const isVisible = popover?.presence?.present && popover?.presence?.mounted && !popover?.presence?.exiting;

        const rootProps = mergeProps(
            {
                className: popover?.cx('content'),
                ...(isVisible && { 'data-open': '' })
            },
            popover?.ptm('content'),
            ptmi('root')
        );

        return (
            <React.Fragment>
                <Component instance={instance} attrs={rootProps} children={props.children} ref={popover?.presence?.ref} />
            </React.Fragment>
        );
    }
});
