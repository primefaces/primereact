'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useMessageContext } from '../Message.context';
import { defaultContentProps } from './MessageContent.props';

export const MessageContent = withComponent({
    name: 'MessageContent',
    defaultProps: defaultContentProps,
    setup() {
        const message = useMessageContext();

        return { message };
    },
    render(instance) {
        const { props, ptmi, message } = instance;

        const rootProps = mergeProps(
            {
                className: message?.cx('content')
            },
            message?.ptm('content'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
