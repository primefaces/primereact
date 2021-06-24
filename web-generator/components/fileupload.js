const FileUploadProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'name',
        type: 'string',
        default: 'null',
        description: 'Name of the request parameter to identify the files at backend.'
    },
    {
        name: 'url',
        type: 'string',
        default: 'null',
        description: 'Remote url to upload the files.'
    },
    {
        name: 'mode',
        type: 'string',
        default: 'advanced',
        description: 'Defines the UI of the component, possible values are "advanced" and "basic".'
    },
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Used to select multiple files at once from file dialog.'
    },
    {
        name: 'accept',
        type: 'string',
        default: 'false',
        description: 'Pattern to restrict the allowed file types such as "image/*".'
    },
    {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Disables the upload functionality.'
    },
    {
        name: 'auto',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, upload begins automatically after selection is completed.'
    },
    {
        name: 'maxFileSize',
        type: 'number',
        default: 'null',
        description: 'Maximum file size allowed in bytes.'
    },
    {
        name: 'invalidFileSizeMessageSummary',
        type: 'string',
        default: '"&#123;0&#125;: Invalid file size, "',
        description: 'Summary message of the invalid fize size.'
    },
    {
        name: 'invalidFileSizeMessageDetail',
        type: 'string',
        default: '"maximum upload size is &#123;0&#125;."',
        description: 'Detail message of the invalid fize size.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the component.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the component.'
    },
    {
        name: 'withCredentials',
        type: 'boolean',
        default: 'false',
        description: 'Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.'
    },
    {
        name: 'previewWidth',
        type: 'number',
        default: '50',
        description: 'Width of the image thumbnail in pixels.'
    },
    {
        name: 'chooseLabel',
        type: 'string',
        default: 'null',
        description: 'Label of the choose button. Defaults to global value in Locale configuration.'
    },
    {
        name: 'uploadLabel',
        type: 'string',
        default: 'null',
        description: 'Label of the upload button. Defaults to global value in Locale configuration.'
    },
    {
        name: 'cancelLabel',
        type: 'string',
        default: 'null',
        description: 'Label of the cancel button. Defaults to global value in Locale configuration.'
    },
    {
        name: 'chooseOptions',
        type: 'object (OptionsType)',
        default: 'null',
        description: 'Options used to customize the choose button. These options have "label", "icon", "className" and "style" properties.'
    },
    {
        name: 'uploadOptions',
        type: 'object (OptionsType)',
        default: 'null',
        description: 'Options used to customize the upload button. These options have "label", "icon", "className" and "style" properties.'
    },
    {
        name: 'cancelOptions',
        type: 'object (OptionsType)',
        default: 'null',
        description: 'Options used to customize the cancel button. These options have "label", "icon", "className" and "style" properties.'
    },
    {
        name: 'customUpload',
        type: 'boolean',
        default: 'false',
        description: 'Whether to use the default upload or a manual implementation defined in uploadHandler callback.'
    },
    {
        name: 'emptyTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of empty content in the container.'
    },
    {
        name: 'itemTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of each item content in the container.'
    },
    {
        name: 'headerTemplate',
        type: 'any',
        default: 'null',
        description: 'The template of the header.'
    },
    {
        name: 'headerStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the header.'
    },
    {
        name: 'headerClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the header.'
    },
    {
        name: 'contentStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the content.'
    },
    {
        name: 'contentClassName',
        type: 'string',
        default: 'null',
        description: 'Style class of the content.'
    }
];

const FileUploadEvents = [

];

const FileUploadStyles = [
    { name: 'p-fileupload', description: 'Container element.' },
    {
        name: 'p-fileupload-buttonbar',
        description: 'Header containing the buttons.'
    },
    { name: 'p-fileupload-content', description: 'Content section.' }
];

module.exports = {
    fileupload: {
        name: 'FileUpload',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/fileupload',
        props: FileUploadProps,
        events: FileUploadEvents,
        styles: FileUploadStyles
    }
};
