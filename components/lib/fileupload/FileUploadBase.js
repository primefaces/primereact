import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
