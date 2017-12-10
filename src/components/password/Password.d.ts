import React = require("react");

interface PasswordProps extends React.HTMLProps<HTMLInputElement> {
    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
    [key: string]: any;
}

export class Password extends React.Component<PasswordProps,any> {}