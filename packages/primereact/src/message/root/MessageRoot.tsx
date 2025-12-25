'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMessage } from '@primereact/headless/message';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MessageProvider } from '../Message.context';
import { defaultRootProps } from './MessageRoot.props';

export const MessageRoot = withComponent({
    name: 'MessageRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const message = useMessage(instance.inProps);

        return message;
    },
    render(instance) {
        const { id, props, ptmi, cx, state } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                ...(!state.visible && {
                    style: {
                        display: 'none'
                    }
                })
            },
            ptmi('root')
        );

        return (
            <MessageProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </MessageProvider>
        );
    }
});
