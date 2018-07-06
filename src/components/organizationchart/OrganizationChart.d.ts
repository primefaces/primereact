import React = require("react");

interface OrganizationChartProps {
    id?: string;
    value?: any;
    style?: object;
    className?: string;
    selectionMode?: string;
    selection?: any;
    nodeTemplate?: any;
    selectionChange?(data: any): void;
    onNodeSelect?(e: {originalEvent: Event, node: any}): void;
    onNodeUnselect?(e: {originalEvent: Event, node: any}): void;
}

export class OrganizationChart extends React.Component<OrganizationChartProps,any> {}