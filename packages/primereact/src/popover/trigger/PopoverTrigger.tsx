'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useButton } from '@primereact/headless/button';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultTriggerProps } from './PopoverTrigger.props';

export const PopoverTrigger = withComponent({
    name: 'PopoverTrigger',
    defaultProps: defaultTriggerProps,
    setup(instance) {
        const popover = usePopoverContext();

        const button = useButton(instance.inProps);

        return { popover, button };
    },
    render(instance) {
        const { props, ptmi, popover, cx } = instance;
        const { as, ...restProps } = props;

        const rootProps = mergeProps(
            restProps,
            {
                className: cx('trigger'),
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    popover?.show?.();
                    props.onClick?.(e);
                },
                'aria-expanded': popover?.state.visible
            },
            popover?.ptm('trigger'),
            ptmi('root')
        );

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children} ref={popover?.triggerRef} />;
    }
});
