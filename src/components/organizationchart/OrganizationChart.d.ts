import * as React from 'react';

type SelectionModeType = 'single' | 'multiple';

type NodeDataType = OrganizationChartNodeData | undefined | null;

type SelectionNodeDataType = OrganizationChartNodeData | OrganizationChartNodeData[] | undefined | null;

interface OnNodeSelectParams {
    originalEvent: Event;
    node: NodeDataType;
}

interface OnNodeUnselectParams extends OnNodeSelectParams { }

interface OrganizationChartNodeData {
    className?: string;
    expanded?: boolean;
    children?: OrganizationChartNodeData[];
    selectable?: boolean;
    label?: string;
}

interface OrganizationChartProps {
    id?: string;
    value?: OrganizationChartNodeData[];
    style?: object;
    className?: string;
    selectionMode?: SelectionModeType;
    selection?: SelectionNodeDataType;
    nodeTemplate?(node: OrganizationChartNodeData): React.ReactNode;
    selectionChange?(node: SelectionNodeDataType): void;
    onNodeSelect?(e: OnNodeSelectParams): void;
    onNodeUnselect?(e: OnNodeUnselectParams): void;
}

export class OrganizationChart extends React.Component<OrganizationChartProps, any> { }
