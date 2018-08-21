import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    [key: string]: any;
    keyfilter?: any;
    validateOnly?: boolean;
    onInput?(event: React.FormEvent<HTMLInputElement>): void;
    onKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void;
}

export class InputText extends React.Component<InputTextProps,any> {}
