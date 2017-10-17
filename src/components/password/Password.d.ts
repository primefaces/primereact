import React = require("react");

interface PasswordProps {
    id?: string;
    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    feedback?: boolean;
}

export class Password extends React.Component<PasswordProps,any> {}