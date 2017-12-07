import React = require("react");

interface MultiSelectItemProps {
    option?: object;
    selected?: boolean;
    template?(): void;
    onClick?(e: {originalEvent: Event, option: object}): void;
}

export class MultiSelectItem extends React.Component<MultiSelectItemProps,any> {}