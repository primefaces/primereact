import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames(
            'p-colorpicker p-component',
            {
                'p-colorpicker-overlay': !props.inline
            },
            props.className
        ),
    input: ({ props }) =>
        classNames('p-colorpicker-preview p-inputtext', props.inputClassName, {
            'p-disabled': props.disabled
        }),
    panel: ({ panelProps, context }) =>
        classNames('p-colorpicker-panel', panelProps.panelClassName, {
            'p-colorpicker-overlay-panel': !panelProps.inline,
            'p-disabled': panelProps.disabled,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    content: 'p-colorpicker-content',
    hueHandle: 'p-colorpicker-hue-handle',
    hue: 'p-colorpicker-hue',
    colorHandle: 'p-colorpicker-color-handle',
    color: 'p-colorpicker-color',
    selector: 'p-colorpicker-color-selector',
    transition: 'p-connected-overlay'
};

const styles = `
@layer primereact {
    .p-colorpicker {
        display: inline-block;
    }
    
    .p-colorpicker-dragging {
        cursor: pointer;
    }
    
    .p-colorpicker-overlay {
        position: relative;
    }
    
    .p-colorpicker-panel {
        position: relative;
        width: 193px;
        height: 166px;
    }
    
    .p-colorpicker-overlay-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-colorpicker-preview {
        cursor: pointer;
    }
    
    .p-colorpicker-panel .p-colorpicker-content {
        position: relative;
    }
    
    .p-colorpicker-panel .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        top: 8px;
        left: 8px;
        position: absolute;
    }
    
    .p-colorpicker-panel .p-colorpicker-color {
        width: 150px;
        height: 150px;
    }
    
    .p-colorpicker-panel .p-colorpicker-color-handle {
        position: absolute;
        top: 0px;
        left: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
    }
    
    .p-colorpicker-panel .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        top: 8px;
        left: 167px;
        position: absolute;
        opacity: 0.85;
    }
    
    .p-colorpicker-panel .p-colorpicker-hue-handle {
        position: absolute;
        top: 150px;
        left: 0px;
        width: 21px;
        margin-left: -2px;
        margin-top: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
    }
    
    .p-colorpicker-panel .p-colorpicker-color {
        background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)
    }
    .p-colorpicker-panel .p-colorpicker-hue {
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)
    }
}
`;

export const ColorPickerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ColorPicker',
        appendTo: null,
        autoFocus: false,
        children: undefined,
        className: null,
        defaultColor: 'ff0000',
        disabled: false,
        format: 'hex',
        id: null,
        inline: false,
        inputClassName: null,
        inputId: null,
        inputRef: null,
        inputStyle: null,
        onChange: null,
        onHide: null,
        onShow: null,
        panelClassName: null,
        panelStyle: null,
        style: null,
        tabIndex: null,
        tooltip: null,
        tooltipOptions: null,
        transitionOptions: null,
        value: null
    },
    css: {
        classes,
        styles
    }
});
