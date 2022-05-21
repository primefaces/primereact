import * as React from 'react';

type MessageSeverityType = 'success' | 'info' | 'warn' | 'error';

type MessageContentType = React.ReactNode | ((props: MessageProps) => React.ReactNode);

type MessageTextType = React.ReactNode | ((props: MessageProps) => React.ReactNode);

export interface MessageProps {
    id?: string;
    className?: string;
    style?: object;
    text?: MessageTextType;
    severity?: MessageSeverityType;
    content?: MessageContentType;
    children?: React.ReactNode;
}

export declare class Message extends React.Component<MessageProps, any> { }
