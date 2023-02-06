import { ObjectUtils } from '../utils/Utils';

export const MultiStateCheckboxBase = {
    defaultProps: {
        __TYPE: 'MultiStateCheckbox',
        id: null,
        value: null,
        options: null,
        optionValue: null,
        optionLabel: null,
        optionIcon: null,
        iconTemplate: null,
        dataKey: null,
        style: null,
        className: null,
        disabled: false,
        readOnly: false,
        empty: true,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MultiStateCheckboxBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MultiStateCheckboxBase.defaultProps)
};
