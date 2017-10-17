import React = require("react");

interface FirstPageLinkProps {
    disabled?: boolean;
    onClick?(): void;
}

export class FirstPageLink extends React.Component<FirstPageLinkProps,any> {}