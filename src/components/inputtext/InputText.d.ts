import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    [key: string]: any;
    onInput?(event: Event): void;
    onKeyPress?(event: Event): void;
    keyfilter?: any;
    validateOnly?: boolean;
}

export class InputText extends React.Component<InputTextProps,any> {}