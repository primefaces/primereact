'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useFocusTrap } from '@primereact/headless/focustrap';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultContentProps } from './PopoverContent.props';

export const PopoverContent = withComponent({
    name: 'Popover.Content',
    defaultProps: defaultContentProps,
    setup() {
        const popover = usePopoverContext();
        const focusTrap = useFocusTrap({ container: popover?.presence?.ref?.current, autoFocus: true });

        return { popover, focusTrap };
    },
    render(instance) {
        const { props, ptmi, popover, focusTrap } = instance;

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
                {focusTrap?.hiddenElements[0]}
                <Component instance={instance} attrs={rootProps} children={props.children} ref={popover?.presence?.ref} />
                {focusTrap?.hiddenElements[1]}
            </React.Fragment>
        );
    }
});
