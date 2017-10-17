import React = require("react");

interface PickListTransferControlsProps {
    source?: Array<any>;
    target?: Array<any>;
    sourceSelection?: Array<any>;
    targetSelection?: Array<any>;
    onTransfer?: Array<any>;
}

export class PickListTransferControls extends React.Component<PickListTransferControlsProps,any> {}