import { ObjectUtils } from '../utils/Utils';

export const CheckboxBase = {
    defaultProps: {
        __TYPE: 'Checkbox',
        id: null,
        inputRef: null,
        inputId: null,
        value: null,
        name: null,
        checked: false,
        trueValue: true,
        falseValue: false,
        style: null,
        className: null,
        disabled: false,
        required: false,
        readOnly: false,
        tabIndex: null,
        icon: 'pi pi-check',
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onMouseDown: null,
        onContextMenu: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, CheckboxBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, CheckboxBase.defaultProps)
};
