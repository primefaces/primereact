import React = require("react");

interface PickListControlsProps {
    className?: string;
    list?: Array<any>;
    selection?: Array<any>;
    onReorder?(e: {originalEvent: Event, value: any, direction: string}): void;
}

export class PickListControls extends React.Component<PickListControlsProps,any> {}