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
        type: 'object',
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
    }
];

const EditorEvents = [

];

const EditorStyles = [
    { name: 'p-editor-container', description: 'Container element' },
    { name: 'p-editor-toolbar', description: 'Toolbar of the editor' },
    { name: 'p-editor-content', description: 'Editable area' }
];

module.exports = {
    editor: {
        name: 'Editor',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/editor',
        props: EditorProps,
        events: EditorEvents,
        styles: EditorStyles
    }
};
