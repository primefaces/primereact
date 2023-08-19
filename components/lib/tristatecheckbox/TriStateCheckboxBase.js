import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames('p-tristatecheckbox p-checkbox p-component', { 'p-checkbox-disabled': props.disabled }),
    checkIcon: 'p-checkbox-icon p-c',
    checkbox: ({ props, focusedState }) =>
        classNames('p-checkbox-box', {
            'p-highlight': ObjectUtils.isNotEmpty(props.value),
            'p-disabled': props.disabled,
            'p-focus': focusedState
        })
};

export const TriStateCheckboxBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TriStateCheckbox',
        autoFocus: false,
        checkIcon: null,
        className: null,
        disabled: false,
        id: null,
        onChange: null,
        readOnly: false,
        style: null,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        uncheckIcon: null,
        value: null,
        children: undefined
    },
    css: {
        classes
    }
});
