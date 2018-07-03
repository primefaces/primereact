import React = require("react");

interface DropdownItemProps {
    option?: object;
    template?(option:any): JSX.Element | undefined;
    selected?: boolean;
    onClick?(e: {originalEvent: Event, option: object}): void;
}

export class DropdownItem extends React.Component<DropdownItemProps,any> {}