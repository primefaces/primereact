import { ComponentBase } from '../componentbase/ComponentBase';

export const ConfirmPopupBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ConfirmPopup',
        tagKey: undefined,
        target: null,
        visible: false,
        message: null,
        rejectLabel: null,
        acceptLabel: null,
        icon: null,
        rejectIcon: null,
        acceptIcon: null,
        rejectClassName: null,
        acceptClassName: null,
        className: null,
        style: null,
        appendTo: null,
        dismissable: true,
        footer: null,
        onShow: null,
        onHide: null,
        accept: null,
        reject: null,
        transitionOptions: null,
        children: undefined
    }
});
