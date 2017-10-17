import React = require("react");

interface LastPageLinkProps {
    disabled?: boolean;
    onClick?(): void;
}

export class LastPageLink extends React.Component<LastPageLinkProps,any> {}