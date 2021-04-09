import * as React from 'react';

type SeverityType = 'success' | 'info' | 'warn' | 'error';

type ContentType = React.ReactNode | ((props: MessageProps) => React.ReactNode);

interface MessageProps {
    id?: string;
    className?: string;
    style?: object;
    text?: string;
    severity?: SeverityType;
    content?: ContentType;
}

export class Message extends React.Component<MessageProps, any> { }
