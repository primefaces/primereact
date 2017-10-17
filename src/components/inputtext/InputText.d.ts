import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    onInput?(): void;
    [key: string]: any;
}

export class InputText extends React.Component<InputTextProps,any> {}