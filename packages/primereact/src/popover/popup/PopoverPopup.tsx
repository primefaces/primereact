'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultPopupProps } from './PopoverPopup.props';

export const PopoverPopup = withComponent({
    name: 'Popover.Popup',
    defaultProps: defaultPopupProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const isVisible = popover?.presence?.present && popover?.presence?.mounted && !popover?.presence?.exiting;

        const rootProps = mergeProps(
            {
                className: popover?.cx('popup'),
                ...(isVisible && { 'data-open': '' })
            },
            popover?.ptm('popup'),
            ptmi('root')
        );

        return (
            <React.Fragment>
                <Component instance={instance} attrs={rootProps} children={props.children} ref={popover?.presence?.ref} />
            </React.Fragment>
        );
    }
});
