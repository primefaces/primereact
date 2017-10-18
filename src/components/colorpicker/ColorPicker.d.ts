import React = require("react");

interface ColorPickerProps {
    id?: string;
    value?: any;
    style?: object;
    className?: string;
    inline?: boolean;
    format?: string;
    appendTo?: string;
    disabled?: boolean;
    tabindex?: string;
    inputId?: string;
    onChange?(originalEvent: Event, value: any): void;
}

export class ColorPicker extends React.Component<ColorPickerProps,any> {}