import React = require("react");

interface OrderListControlsProps {
    value?: Array<any>;
    selection?: Array<any>;
    onReorder?(e: {originalEvent: Event, value: any, direction: string}): void;
}

export class OrderListControls extends React.Component<OrderListControls,any> {}