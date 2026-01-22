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
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                autoFocus: props.autoFocus,
                className: popover?.cx('content'),
                onClick: popover?.onContentClick,
                onMouseDown: popover?.onContentMouseDown,
                onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
                    popover?.onContentKeydown?.(event);
                }
            },
            popover?.ptm('content'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
