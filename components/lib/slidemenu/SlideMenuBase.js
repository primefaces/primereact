import { ComponentBase } from '../componentbase/ComponentBase';

export const SlideMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'SlideMenu',
        appendTo: null,
        autoZIndex: true,
        backIcon: null,
        backLabel: 'Back',
        baseZIndex: 0,
        className: null,
        easing: 'ease-out',
        effectDuration: 250,
        id: null,
        menuWidth: 190,
        model: null,
        onHide: null,
        onShow: null,
        onNavigate: null,
        popup: false,
        style: null,
        submenuIcon: null,
        transitionOptions: null,
        viewportHeight: 175,
        children: undefined
    }
});
