import { ObjectUtils } from '../utils/Utils';

export const MultiStateCheckboxBase = {
    defaultProps: {
        __TYPE: 'MultiStateCheckbox',
        autoFocus: false,
        className: null,
        dataKey: null,
        disabled: false,
        empty: true,
        iconTemplate: null,
        id: null,
        onChange: null,
        optionIcon: null,
        optionLabel: null,
        optionValue: null,
        options: null,
        readOnly: false,
        style: null,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        value: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MultiStateCheckboxBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MultiStateCheckboxBase.defaultProps)
};
