'use client';
import { Component } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import { Button } from 'primereact/button';
import * as React from 'react';
import { usePopoverContext } from '../Popover.context';
import { defaultCloseProps } from './PopoverClose.props';

export const PopoverClose = withComponent({
    name: 'PopoverClose',
    defaultProps: defaultCloseProps,
    setup() {
        const popover = usePopoverContext();

        return { popover };
    },
    render(instance) {
        const { props, ptmi, popover } = instance;

        const rootProps = mergeProps(
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

        return <Component as={Button} instance={instance} attrs={{ ...props, ...rootProps }} children={props.children ?? icon} />;
    }
});
