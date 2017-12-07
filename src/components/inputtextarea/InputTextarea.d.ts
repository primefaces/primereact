import React = require("react");

interface InputTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
    autoResize?: boolean;
    onInput?(event: Event): void;
    [key: string]: any;
}

export class InputTextarea extends React.Component<InputTextareaProps,any> {}