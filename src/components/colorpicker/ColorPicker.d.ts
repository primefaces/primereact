import React = require("react");

interface ColorPickerProps {
    id?: string;
    value?: any;
    style?: object;
    className?: string;
    defaultColor?: string;
    inline?: boolean;
    format?: string;
    appendTo?: any;
    disabled?: boolean;
    tabindex?: string;
    inputId?: string;
    onChange?(value: any): void;
}

export class ColorPicker extends React.Component<ColorPickerProps,any> {}