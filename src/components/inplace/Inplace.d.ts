import React = require("react");

interface InplaceProps {
    style?: object;
    className?: string;
    active?: boolean;
    closble?: boolean;
    disabled?: boolean;
    onOpen?(event: Event): void;
    onClose?(event: Event): void;
    onToggle?(e:{event: originalEvent, value: boolean}): void;
}

export class Inplace extends React.Component<InplaceProps,any> {}