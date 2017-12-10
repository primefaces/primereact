import React = require("react");

interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
    [key: string]: any;
}

export class InputText extends React.Component<InputTextProps,any> {}