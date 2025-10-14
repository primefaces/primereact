'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useFileUploadContext } from '../FileUpload.context';
import { defaultContentProps } from './FileUploadContent.props';

export const FileUploadContent = withComponent({
    name: 'FileUploadContent',
    defaultProps: defaultContentProps,
    setup() {
        const fileupload = useFileUploadContext();

        return { fileupload };
    },
    render(instance) {
        const { props, ptmi, fileupload } = instance;

        const rootProps = mergeProps(
            {
                className: fileupload?.cx('content'),
                onDragEnter: fileupload?.onDragEnter,
                onDragOver: fileupload?.onDragOver,
                onDragLeave: fileupload?.onDragLeave,
                onDrop: fileupload?.onDrop
            },
            fileupload?.ptm('content'),
            ptmi('root')
        );

        return <Component ref={fileupload?.contentRef} instance={instance} attrs={rootProps} children={props.children} />;
    }
});
