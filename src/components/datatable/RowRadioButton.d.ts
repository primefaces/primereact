import React = require("react");

interface RowRadioButtonProps {
    rowData?: object;
    onClick?( originalEvent: Event, data: object): void;
    selected?: boolean;
}

export class RowRadioButton extends React.Component<RowRadioButtonProps,any> {}