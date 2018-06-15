import React = require("react");

interface MessagesProps {
    id?: string;
    className?: string;
    style?: object;
    onRemove?(message:any): void;
    onClick?(message:any): void;
}

export class Messages extends React.Component<MessagesProps,any> {}