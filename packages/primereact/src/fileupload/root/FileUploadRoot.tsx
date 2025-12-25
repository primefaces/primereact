'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useFileUpload } from '@primereact/headless/fileupload';
import { mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { FileUploadProvider } from '../FileUpload.context';
import { defaultRootProps } from './FileUploadRoot.props';

export const FileUploadRoot = withComponent({
    name: 'FileUploadRoot',
    defaultProps: defaultRootProps,
    setup(instance) {
        const fileupload = useFileUpload(instance.inProps);

        return fileupload;
    },
    render(instance) {
        const { id, props, ptmi, ptm, cx, inputRef, onFileSelect } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        const createText = () => {
            const textProps = mergeProps(
                {
                    type: 'file',
                    className: cx('input'),
                    accept: props.accept,
                    multiple: props.multiple,
                    disabled: props.disabled,
                    onChange: onFileSelect
                },
                ptm('text')
            );

            return <input ref={inputRef} {...textProps} />;
        };

        const text = createText();

        return (
            <FileUploadProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {text}
                    {resolve(props.children, instance)}
                </Component>
            </FileUploadProvider>
        );
    }
});
