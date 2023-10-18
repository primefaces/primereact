import { ComponentBase } from '../componentbase/ComponentBase';

export const SpeedDialBase = ComponentBase.extend({
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
        showIcon: null,
        hideIcon: null,
        rotateAnimation: true,
        onVisibleChange: null,
        onClick: null,
        onShow: null,
        onHide: null,
        children: undefined
    }
});
