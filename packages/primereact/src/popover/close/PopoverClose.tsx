'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultCloseProps } from './PopoverClose.props';

export const PopoverClose = withComponent({
    name: 'Popover.Close',
    defaultProps: defaultCloseProps,
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
                type: 'button',
                className: popover?.cx('close'),
                onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                    popover?.hide?.();
                    props.onClick?.(e);
                }
            },
            popover?.ptm('close'),
            ptmi('root')
        );

        const createIconElement = () => {
            return <TimesIcon pt={popover?.ptm('closeIcon')} />;
        };

        const icon = createIconElement();

        return <Component as={as} instance={instance} attrs={rootProps} children={props.children ?? icon} />;
    }
});
