import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames(
            'p-togglebutton p-component',
            {
                'p-disabled': props.disabled,
                'p-highlight': props.checked,
                'p-invalid': props.invalid
            },
            props.className
        ),
    input: 'p-togglebutton-input',
    box: ({ hasIcon, hasLabel }) =>
        classNames('p-button p-component', {
            'p-button-icon-only': hasIcon && !hasLabel
        }),
    icon: ({ props, label }) =>
        classNames('p-button-icon', {
            'p-button-icon-left': props.iconPos === 'left' && label,
            'p-button-icon-right': props.iconPos === 'right' && label
        }),
    label: 'p-button-label'
};

export const ToggleButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ToggleButton',
        id: null,
        onIcon: null,
        offIcon: null,
        onLabel: 'Yes',
        offLabel: 'No',
        iconPos: 'left',
        invalid: false,
        style: null,
        className: null,
        checked: false,
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        children: undefined
    },
    css: {
        classes
    }
});
