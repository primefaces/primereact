import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: 'p-confirm-dialog',
    message: 'p-confirm-dialog-message',
    icon: 'p-confirm-dialog-icon',
    acceptButton: 'p-confirm-dialog-accept',
    rejectButton: ({ getPropValue }) =>
        classNames('p-confirm-dialog-reject', {
            'p-button-text': !getPropValue('rejectClassName')
        })
};

export const ConfirmDialogBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ConfirmDialog',
        accept: null,
        acceptClassName: null,
        acceptIcon: null,
        acceptLabel: null,
        appendTo: null,
        breakpoints: null,
        children: undefined,
        className: null,
        defaultFocus: 'accept',
        footer: null,
        icon: null,
        message: null,
        onHide: null,
        reject: null,
        rejectClassName: null,
        rejectIcon: null,
        rejectLabel: null,
        tagKey: undefined,
        visible: undefined
    },
    css: {
        classes
    }
});
