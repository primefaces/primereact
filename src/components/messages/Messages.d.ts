import * as React from 'react';
import { MessageSeverity } from '../api';

declare namespace Messages {

    type MessageType = MessageOptions | MessageOptions[];

    interface MessageOptions {
        id?: string;
        severity?: MessageSeverity;
        summary?: React.ReactNode;
        detail?: React.ReactNode;
        closable?: boolean;
        sticky?: boolean;
        life?: number;
    }

    interface MessagesProps {
        id?: string;
        className?: string;
        style?: object;
        transitionOptions?: object;
        onRemove?(message: MessageOptions): void;
        onClick?(message: MessageOptions): void;
    }
}

export declare class Messages extends React.Component<Messages.MessagesProps, any> {
    public show(message: Messages.MessageType): void;
    public clear(): void;
    public replace(message: Messages.MessageType): void;
}
