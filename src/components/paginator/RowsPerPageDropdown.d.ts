import React = require("react");

interface RowsPerPageDropdownProps {
    options?: Array<any>;
    onChange?(): void;
}

export class RowsPerPageDropdown extends React.Component<RowsPerPageDropdownProps,any> {}