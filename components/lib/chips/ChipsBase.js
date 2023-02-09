import { ObjectUtils } from '../utils/Utils';

export const ChipsBase = {
    defaultProps: {
        __TYPE: 'Chips',
        id: null,
        inputRef: null,
        inputId: null,
        name: null,
        placeholder: null,
        value: null,
        max: null,
        disabled: null,
        readOnly: false,
        removable: true,
        style: null,
        className: null,
        tooltip: null,
        tooltipOptions: null,
        ariaLabelledBy: null,
        separator: null,
        allowDuplicate: true,
        itemTemplate: null,
        keyfilter: null,
        addOnBlur: null,
        onAdd: null,
        onRemove: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        onKeyDown: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ChipsBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ChipsBase.defaultProps)
};
