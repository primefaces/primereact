import { ObjectUtils } from '../utils/Utils';

export const ToggleButtonBase = {
    defaultProps: {
        __TYPE: 'ToggleButton',
        id: null,
        onIcon: null,
        offIcon: null,
        onLabel: 'Yes',
        offLabel: 'No',
        iconPos: 'left',
        style: null,
        className: null,
        checked: false,
        tabIndex: 0,
        tooltip: null,
        tooltipOptions: null,
        onChange: null,
        onFocus: null,
        onBlur: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ToggleButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ToggleButtonBase.defaultProps)
};
