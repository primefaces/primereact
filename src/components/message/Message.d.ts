import * as React from 'react';
import { MessageSeverity } from '../api';

declare namespace Message {

    type ContentType = React.ReactNode | ((props: MessageProps) => React.ReactNode);

    interface MessageProps {
        id?: string;
        className?: string;
        style?: object;
        text?: string;
        severity?: MessageSeverity;
        content?: ContentType;
    }
}

export declare class Message extends React.Component<Message.MessageProps, any> { }
