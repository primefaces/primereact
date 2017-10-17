import React = require("react");

interface BreadCrumbProps {
    id?: string;
    model?: Array<any>;
    home?: any;
    style?: object;
    className?: string;
}

export class BreadCrumb extends React.Component<BreadCrumbProps,any> {}