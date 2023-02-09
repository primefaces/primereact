import { ObjectUtils } from '../utils/Utils';

export const CascadeSelectBase = {
    defaultProps: {
        __TYPE: 'CascadeSelect',
        id: null,
        inputRef: null,
        style: null,
        className: null,
        value: null,
        name: null,
        options: null,
        optionLabel: null,
        optionValue: null,
        optionGroupLabel: null,
        optionGroupChildren: null,
        placeholder: null,
        itemTemplate: null,
        disabled: false,
        dataKey: null,
        inputId: null,
        tabIndex: null,
        ariaLabelledBy: null,
        appendTo: null,
        transitionOptions: null,
        dropdownIcon: 'pi pi-chevron-down',
        onChange: null,
        onGroupChange: null,
        onBeforeShow: null,
        onBeforeHide: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, CascadeSelectBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, CascadeSelectBase.defaultProps)
};
