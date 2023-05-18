import { ObjectUtils } from '../utils/Utils';

export const TriStateCheckboxBase = {
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
    getProps: (props) => ObjectUtils.getMergedProps(props, TriStateCheckboxBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TriStateCheckboxBase.defaultProps)
};
