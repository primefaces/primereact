import { ComponentBase } from '../componentbase/ComponentBase';

export const BlockUIBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'BlockUI',
        autoZIndex: true,
        baseZIndex: 0,
        blocked: false,
        className: null,
        containerClassName: null,
        containerStyle: null,
        fullScreen: false,
        id: null,
        onBlocked: null,
        onUnblocked: null,
        style: null,
        template: null,
        children: undefined
    }
});
