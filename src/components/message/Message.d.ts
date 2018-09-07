import * as React from 'react';

interface MessageProps {
    id?: string;
    className?: string;
    style?: object;
    text?: string;
    severity?: string
}

export class Message extends React.Component<MessageProps,any> {}