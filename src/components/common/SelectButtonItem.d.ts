import React = require("react");

interface SelectButtonItemProps {
    option?: object;
    selected?: boolean;
    tabIndex?: number;
    onClick?(e: {originalEvent: Event, option:object}): void;
}

export class SelectButtonItem extends React.Component<SelectButtonItemProps,any> {}