import { ObjectUtils } from '../utils/Utils';

export const ButtonBase = {
    defaultProps: {
        __TYPE: 'Button',
        label: null,
        icon: null,
        iconPos: 'left',
        badge: null,
        severity: null,
        rounded: false,
        raised: false,
        outlined: false,
        text: false,
        link: false,
        badgeClassName: null,
        tooltip: null,
        size: null,
        tooltipOptions: null,
        disabled: false,
        loading: false,
        loadingIcon: null,
        visible: true,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ButtonBase.defaultProps)
};
