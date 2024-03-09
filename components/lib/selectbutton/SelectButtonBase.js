import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames('p-selectbutton p-buttonset p-component', props.className),
    button: ({ itemProps: props, focusedState }) =>
        classNames('p-button p-component', {
            'p-highlight': props.selected,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        }),
    label: 'p-button-label p-c'
};

export const SelectButtonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'SelectButton',
        id: null,
        value: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        tabIndex: null,
        multiple: false,
        unselectable: true,
        allowEmpty: true,
        disabled: false,
        style: null,
        className: null,
        dataKey: null,
        tooltip: null,
        tooltipOptions: null,
        itemTemplate: null,
        onChange: null,
        children: undefined
    },
    css: {
        classes
    }
});
