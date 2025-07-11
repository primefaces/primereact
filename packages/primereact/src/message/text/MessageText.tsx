'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMessageContext } from '../Message.context';
import { defaultProps } from './MessageText.props';

export const MessageText = withComponent({
    name: 'MessageText',
    defaultProps,
    setup() {
        const message = useMessageContext();

        return { message };
    },
    render(instance) {
        const { props, ptmi, message } = instance;

        const rootProps = mergeProps(
            {
                className: message?.cx('text')
            },
            message?.ptm('text'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
