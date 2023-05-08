import { ComponentBase } from '../componentbase/ComponentBase';

export const ScrollTopBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ScrollTop',
        target: 'window',
        threshold: 400,
        icon: null,
        behavior: 'smooth',
        className: null,
        style: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    }
});
