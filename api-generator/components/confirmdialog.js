const ConfirmDialogProps = [
    {
        name: 'visible',
        type: 'boolean',
        default: 'false',
        description: 'Specifies the visibility of the confirm dialog.'
    },
    {
        name: 'message',
        type: 'string',
        default: 'null',
        description: 'Message of the confirmation.'
    },
    {
        name: 'icon',
        type: 'string',
        default: 'null',
        description: 'Icon to display next to the message.'
    },
    {
        name: 'acceptLabel',
        type: 'string',
        default: 'Yes',
        description: 'Label of the accept button.'
    },
    {
        name: 'rejectLabel',
        type: 'string',
        default: 'No',
        description: 'Label of the reject button.'
    },
    {
        name: 'acceptIcon',
        type: 'string',
        default: 'null',
        description: 'Icon of the accept button.'
    },
    {
        name: 'rejectIcon',
        type: 'string',
        default: 'null',
        description: 'Icon of the reject button.'
    },
    {
        name: 'acceptClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the accept button.'
    },
    {
        name: 'rejectClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the reject button.'
    },
    {
        name: 'footer',
        type: 'any',
        default: 'null',
        description: 'Footer content of the confirm dialog.'
    },
    {
        name: 'style',
        type: 'string',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    }
];

const ConfirmDialogEvents = [
    {
        name: 'accept',
        description: 'Callback to execute when action is confirmed.',
        arguments: []
    },
    {
        name: 'reject',
        description: 'Callback to execute when action is rejected.',
        arguments: []
    },
    {
        name: 'onHide',
        description: 'Callback to invoke when confirm dialog is hidden.',
        arguments: [
            {
                name: 'result',
                type: 'string',
                description: 'Indicates with which selection the dialog was closed. Valid values are "accept", "reject" and undefined (outside click).'
            }
        ]
    }
];

const ConfirmDialogStyles = [{ name: 'p-confirm-dialog', description: 'Container element.' }];

module.exports = {
    confirmdialog: {
        name: 'ConfirmDialog',
        description: 'ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/confirmdialog',
        props: ConfirmDialogProps,
        events: ConfirmDialogEvents,
        styles: ConfirmDialogStyles
    }
};
