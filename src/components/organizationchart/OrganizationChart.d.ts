import React = require("react");

interface OrganizationChartNodeProps {
    node?: any;
    nodeTemplate?: any;
    root?: boolean;
    first?: boolean;
    last?: boolean;
    selectionMode?: string;
    onNodeClick?(event: Event, node: any): void;
    isSelected?(node: any): void;
}

export class OrganizationChartNode extends React.Component<OrganizationChartNodeProps,any> {}

interface OrganizationChartProps {
    id?: string;
    value?: any;
    style?: object;
    className?: string;
    selectionMode?: string;
    selection?: any;
    nodeTemplate?: any;
    selectionChange?(): void;
    onNodeSelect?(e: {originalEvent: Event, node: any}): void;
    onNodeUnselect?(e: {originalEvent: Event, node: any}): void;
}

export class OrganizationChart extends React.Component<OrganizationChartProps,any> {}