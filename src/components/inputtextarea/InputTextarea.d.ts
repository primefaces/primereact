import React = require("react");

interface InputTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
    autoResize?: boolean;
    [key: string]: any;
}

export class InputTextarea extends React.Component<InputTextareaProps,any> {}