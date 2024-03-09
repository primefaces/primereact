import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => classNames(`p-fileupload p-fileupload-${props.mode} p-component`),
    buttonbar: 'p-fileupload-buttonbar',
    content: 'p-fileupload-content',
    chooseButton: ({ iconOnly, disabled, focusedState }) =>
        classNames('p-button p-fileupload-choose p-component', {
            'p-disabled': disabled,
            'p-focus': focusedState,
            'p-button-icon-only': iconOnly
        }),
    label: 'p-button-label p-clickable',
    file: 'p-fileupload-row',
    fileName: 'p-fileupload-filename',
    thumbnail: 'p-fileupload-file-thumbnail',
    chooseButtonLabel: 'p-button-label p-clickable',
    basicButton: ({ disabled, focusedState, hasFiles }) => classNames('p-button p-component p-fileupload-choose', { 'p-fileupload-choose-selected': hasFiles, 'p-disabled': disabled, 'p-focus': focusedState }),
    chooseIcon: ({ props, iconOnly }) => (props.mode === 'basic' ? classNames('p-button-icon', { 'p-button-icon-left': !iconOnly }) : classNames('p-button-icon p-clickable', { 'p-button-icon-left': !iconOnly })),
    uploadIcon: ({ iconOnly }) => classNames('p-button-icon p-c', { 'p-button-icon-left': !iconOnly }),
    cancelIcon: ({ iconOnly }) => classNames('p-button-icon p-c', { 'p-button-icon-left': !iconOnly })
};

const styles = `
@layer primereact {
    .p-fileupload-content {
        position: relative;
    }
    
    .p-fileupload-row {
        display: flex;
        align-items: center;
    }
    
    .p-fileupload-row > div {
        flex: 1 1 auto;
        width: 25%;
    }
    
    .p-fileupload-row > div:last-child {
        text-align: right;
    }
    
    .p-fileupload-content > .p-progressbar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-button.p-fileupload-choose {
        position: relative;
        overflow: hidden;
    }
    
    .p-fileupload-buttonbar {
        display: flex;
        flex-wrap: wrap;
    }
    
    .p-button.p-fileupload-choose input[type='file'] {
        display: none;
    }
    
    .p-fileupload-choose.p-fileupload-choose-selected input[type='file'] {
        display: none;
    }
    
    .p-fileupload-filename {
        word-break: break-all;
    }
    
    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }
    
    .p-fileupload-file-badge {
        margin: 0.5rem;
    }
    
    .p-fluid .p-fileupload .p-button {
        width: auto;
    }
}
`;

export const FileUploadBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'FileUpload',
        id: null,
        name: null,
        url: null,
        mode: 'advanced',
        multiple: false,
        accept: null,
        removeIcon: null,
        disabled: false,
        auto: false,
        maxFileSize: null,
        invalidFileSizeMessageSummary: '{0}: Invalid file size, ',
        invalidFileSizeMessageDetail: 'maximum upload size is {0}.',
        style: null,
        className: null,
        withCredentials: false,
        previewWidth: 50,
        chooseLabel: null,
        uploadLabel: null,
        cancelLabel: null,
        chooseOptions: {
            label: null,
            icon: null,
            iconOnly: false,
            className: null,
            style: null
        },
        uploadOptions: {
            label: null,
            icon: null,
            iconOnly: false,
            className: null,
            style: null
        },
        cancelOptions: {
            label: null,
            icon: null,
            iconOnly: false,
            className: null,
            style: null
        },
        customUpload: false,
        headerClassName: null,
        headerStyle: null,
        contentClassName: null,
        contentStyle: null,
        headerTemplate: null,
        itemTemplate: null,
        emptyTemplate: null,
        progressBarTemplate: null,
        onBeforeUpload: null,
        onBeforeSend: null,
        onBeforeDrop: null,
        onBeforeSelect: null,
        onUpload: null,
        onError: null,
        onClear: null,
        onSelect: null,
        onProgress: null,
        onValidationFail: null,
        uploadHandler: null,
        onRemove: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
