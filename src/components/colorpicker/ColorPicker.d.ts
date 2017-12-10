import React = require("react");

interface ColorPickerProps {
    id?: string;
    value?: any;
    style?: object;
    className?: string;
    defaultColor?: string;
    inline?: boolean;
    format?: string;
    appendTo?: string;
    disabled?: boolean;
    tabindex?: string;
    inputId?: string;
    onChange?(e: {originalEvent: Event, value: any}): void;
}

export class ColorPicker extends React.Component<ColorPickerProps,any> {}