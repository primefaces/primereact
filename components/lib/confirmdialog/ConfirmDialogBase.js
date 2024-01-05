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
    css: {
        classes
    }
});
