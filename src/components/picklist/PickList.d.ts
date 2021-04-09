import * as React from 'react';

interface EventParams {
    originalEvent: Event;
    value: any;
}

interface OnChangeParams {
    originalEvent: Event;
    source: any;
    target: any;
}

interface PickListProps {
    id?: string;
    source?: any[];
    target?: any[];
    sourceHeader?: React.ReactNode;
    targetHeader?: React.ReactNode;
    style?: object;
    className?: string;
    sourceStyle?: object;
    targetStyle?: object;
    sourceSelection?: any;
    targetSelection?: any;
    showSourceControls?: boolean;
    showTargetControls?: boolean;
    metaKeySelection?: boolean;
    tabIndex?: number;
    itemTemplate?(item: any): React.ReactNode;
    onChange?(e: OnChangeParams): void;
    onMoveToSource?(e: EventParams): void;
    onMoveAllToSource?(e: EventParams): void;
    onMoveToTarget?(e: EventParams): void;
    onMoveAllToTarget?(e: EventParams): void;
    onSourceSelectionChange?(e: EventParams): void;
    onTargetSelectionChange?(e: EventParams): void;
}

export class PickList extends React.Component<PickListProps, any> { }
