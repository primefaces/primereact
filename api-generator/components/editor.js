const EditorProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'value',
        type: 'string',
        default: 'null',
        description: 'Value of the content.'
    },
    {
        name: 'style',
        type: 'React.CSSProperties',
        default: 'null',
        description: 'Inline style of the container.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the container.'
    },
    {
        name: 'placeholder',
        type: 'string',
        default: 'null',
        description: 'Placeholder text to show when editor is empty.'
    },
    {
        name: 'readOnly',
        type: 'boolean',
        default: 'false',
        description: 'Whether to instantiate the editor to read-only mode.'
    },
    {
        name: 'modules',
        type: 'object',
        default: 'null',
        description: 'Modules configuration, see <a href="http://quilljs.com/docs/modules/">here</a> for available options.'
    },
    {
        name: 'formats',
        type: 'string[]',
        default: 'null',
        description: 'Whitelist of formats to display, see <a href="http://quilljs.com/docs/formats/">here</a> for available options.'
    },
    {
        name: 'headerTemplate',
        type: 'any',
        default: 'null',
        description: 'Style and modules of the toolbar.'
    },
    {
        name: 'maxLength',
        type: 'number',
        default: 'null',
        description: 'Maximum number of characters the editor will accept.'
    }
];

const EditorEvents = [
    {
        name: 'onTextChange',
        description: 'Callback to invoke when text of editor changes.',
        arguments: [
            {
                name: 'event.delta',
                type: 'any',
                description: 'Browser event'
            },
            {
                name: 'event.source',
                type: 'string',
                description: 'Source of change. Will be either "user" or "api".'
            },
            {
                name: 'event.htmlValue',
                type: 'string|null',
                description: 'Current value as html.'
            },
            {
                name: 'event.textValue',
                type: 'string',
                description: 'Current value as text.'
            }
        ]
    },
    {
        name: 'onSelectionChange',
        description: 'Callback to invoke when selected text of editor changes.',
        arguments: [
            {
                name: 'event.range',
                type: 'any',
                description: 'Object with index and length keys indicating where the selection exists.'
            },
            {
                name: 'event.oldRange',
                type: 'any',
                description: 'Object with index and length keys indicating where the previous selection was.'
            },
            {
                name: 'event.source',
                type: 'string',
                description: 'Source of change. Will be either "user" or "api".'
            }
        ]
    },
    {
        name: 'onLoad',
        description: 'Callback to invoke when the quill modules are loaded.',
        arguments: [
            {
                name: 'quill',
                type: 'any',
                description: 'Quill instance'
            }
        ]
    }
];

const EditorStyles = [
    { name: 'p-editor-container', description: 'Container element' },
    { name: 'p-editor-toolbar', description: 'Toolbar of the editor' },
    { name: 'p-editor-content', description: 'Editable area' }
];

module.exports = {
    editor: {
        name: 'Editor',
        description: 'Editor is rich text editor component based on Quill.',
        docUrl: 'https://primefaces.org/primereact/showcase/#/editor',
        props: EditorProps,
        events: EditorEvents,
        styles: EditorStyles
    }
};
