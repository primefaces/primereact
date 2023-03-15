import { ObjectUtils } from '../utils/Utils';

export const SpeedDialBase = {
    defaultProps: {
        __TYPE: 'SpeedDial',
        id: null,
        model: null,
        visible: false,
        style: null,
        className: null,
        direction: 'up',
        transitionDelay: 30,
        type: 'linear',
        radius: 0,
        mask: false,
        disabled: false,
        hideOnClickOutside: true,
        buttonStyle: null,
        buttonClassName: null,
        buttonTemplate: null,
        'aria-label': null,
        maskStyle: null,
        maskClassName: null,
        showIcon: 'pi pi-plus',
        hideIcon: null,
        rotateAnimation: true,
        onVisibleChange: null,
        onClick: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, SpeedDialBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SpeedDialBase.defaultProps)
};
