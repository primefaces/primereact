import { ObjectUtils } from '../utils/Utils';

export const ConfirmPopupBase = {
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
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ConfirmPopupBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ConfirmPopupBase.defaultProps)
};
