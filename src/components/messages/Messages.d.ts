import React = require("react");

interface MessagesProps {
    id?: string;
    closable?: boolean,
    className?: string;
    style?: object;
}

export class Messages extends React.Component<MessagesProps,any> {}