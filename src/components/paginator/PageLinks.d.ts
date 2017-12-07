import React = require("react");

interface PageLinksProps {
    value?: Array<any>;
    page?: number;
    onClick?(e: {originalEvent: Event, value: any}): void;
}

export class PageLinks extends React.Component<PageLinksProps,any> {}