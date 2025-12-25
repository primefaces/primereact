'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons/times';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMessageContext } from '../Message.context';
import { defaultCloseProps } from './MessageClose.props';

export const MessageClose = withComponent({
    name: 'MessageClose',
    defaultProps: defaultCloseProps,
    setup() {
        const message = useMessageContext();

        return { message };
    },
    render(instance) {
        const { props, ptmi, message } = instance;

        const rootProps = mergeProps(
            {
                onClick: message?.handleClose,
                className: message?.cx('closeButton')
            },
            message?.ptm('closeButton'),
            ptmi('root')
        );

        const createCloseIcon = () => {
            const closeIconProps = mergeProps(
                {
                    className: message?.cx('closeIcon')
                },
                message?.ptm('closeIcon'),
                ptmi('root')
            );

            return (
                <span {...closeIconProps}>
                    <TimesIcon />
                </span>
            );
        };

        const closeIcon = createCloseIcon();

        return <Component instance={instance} attrs={rootProps} children={props.children ?? closeIcon} />;
    }
});
