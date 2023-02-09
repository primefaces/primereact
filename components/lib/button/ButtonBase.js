import { ObjectUtils } from '../utils/Utils';

export const ButtonBase = {
    defaultProps: {
        __TYPE: 'Button',
        label: null,
        icon: null,
        iconPos: 'left',
        badge: null,
        badgeClassName: null,
        tooltip: null,
        tooltipOptions: null,
        disabled: false,
        loading: false,
        loadingIcon: 'pi pi-spinner pi-spin',
        visible: true,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ButtonBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ButtonBase.defaultProps)
};
