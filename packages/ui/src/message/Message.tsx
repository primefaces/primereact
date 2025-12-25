'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useMessage } from '@primereact/headless/message';
import { styles } from '@primereact/styles/message';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { MessageProvider } from './Message.context';
import { defaultProps } from './Message.props';
import { MessageClose } from './close/MessageClose';
import { MessageContent } from './content/MessageContent';
import { MessageIcon } from './icon/MessageIcon';
import { MessageText } from './text/MessageText';

export const Message = withComponent({
    name: 'Message',
    defaultProps,
    styles,
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
    },
    components: {
        Content: MessageContent,
        Text: MessageText,
        Icon: MessageIcon,
        Close: MessageClose
    }
});
