import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    [key: string]: any;
    onInput?(): void;
}

export class InputText extends React.Component<InputTextProps,any> {}