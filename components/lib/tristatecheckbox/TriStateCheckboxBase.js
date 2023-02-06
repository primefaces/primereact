import { ObjectUtils } from '../utils/Utils';

export const TriStateCheckboxBase = {
    defaultProps: {
        __TYPE: 'TriStateCheckbox',
        id: null,
        value: null,
        style: null,
        className: null,
        disabled: false,
        readOnly: false,
        tabIndex: '0',
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TriStateCheckboxBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TriStateCheckboxBase.defaultProps)
};
