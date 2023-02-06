import { ObjectUtils } from '../utils/Utils';

export const ConfirmDialogBase = {
    defaultProps: {
        __TYPE: 'ConfirmDialog',
        tagKey: undefined,
        visible: undefined,
        message: null,
        rejectLabel: null,
        acceptLabel: null,
        icon: null,
        rejectIcon: null,
        acceptIcon: null,
        rejectClassName: null,
        acceptClassName: null,
        className: null,
        appendTo: null,
        footer: null,
        breakpoints: null,
        onHide: null,
        accept: null,
        reject: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ConfirmDialogBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ConfirmDialogBase.defaultProps)
};
