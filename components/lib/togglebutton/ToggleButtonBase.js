import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    label: 'p-button-label',
    icon: ({ props, label }) =>
        classNames('p-button-icon p-c', {
            'p-button-icon-left': props.iconPos === 'left' && label,
            'p-button-icon-right': props.iconPos === 'right' && label
        }),
    root: ({ props, hasIcon, hasLabel }) =>
        classNames(
            'p-button p-togglebutton p-component',
            {
                'p-button-icon-only': hasIcon && !hasLabel,
                'p-highlight': props.checked,
                'p-disabled': props.disabled
            },
            props.className
        )
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
