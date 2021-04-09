import * as React from 'react';

type SeverityType = 'success' | 'info' | 'warn' | 'error';

interface MessageOptions {
    id?: string;
    severity?: SeverityType;
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
    onRemove?(message: MessageOptions): void;
    onClick?(message: MessageOptions): void;
}

export class Messages extends React.Component<MessagesProps, any> {
    public show(message: MessageOptions | MessageOptions[]): void;
    public clear(): void;
    public replace(message: MessageOptions | MessageOptions[]): void;
}
