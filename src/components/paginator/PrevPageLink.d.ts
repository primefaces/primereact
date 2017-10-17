import React = require("react");

interface PrevPageLinkProps {
    disabled?: boolean;
    onClick?(): void;
}

export class PrevPageLink extends React.Component<PrevPageLinkProps,any> {}