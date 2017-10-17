import React = require("react");

interface RowCheckboxProps {
    rowData?: object;
    onClick?( originalEvent: Event, data: object, checked: boolean): void;
}

export class RowCheckbox extends React.Component<RowCheckboxProps,any> {}