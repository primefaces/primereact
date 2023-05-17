import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

export const TooltipBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Tooltip',
        appendTo: null,
        at: null,
        autoHide: true,
        autoZIndex: true,
        baseZIndex: 0,
        className: null,
        content: null,
        disabled: false,
        event: null,
        hideDelay: 0,
        hideEvent: 'mouseleave',
        id: null,
        mouseTrack: false,
        mouseTrackLeft: 5,
        mouseTrackTop: 5,
        my: null,
        onBeforeHide: null,
        onBeforeShow: null,
        onHide: null,
        onShow: null,
        position: 'right',
        showDelay: 0,
        showEvent: 'mouseenter',
        showOnDisabled: false,
        style: null,
        target: null,
        updateDelay: 0,
        children: undefined
    }
});
