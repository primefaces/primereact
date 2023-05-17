import { ObjectUtils } from '../utils/Utils';

export const SelectButtonBase = {
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
    getProps: (props) => ObjectUtils.getMergedProps(props, SelectButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SelectButtonBase.defaultProps)
};
