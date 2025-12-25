'use client';
import { Component, withComponent } from '@primereact/core/component';
import { TimesIcon } from '@primereact/icons';
import type { BadgeProps } from '@primereact/types/shared/badge';
import { mergeProps, resolve } from '@primeuix/utils';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import * as React from 'react';
import { useFileUploadContext } from '../FileUpload.context';
import { defaultListProps } from './FileUploadList.props';

interface FileUploadBadgeConfig {
    severity: BadgeProps['severity'];
    label: string;
}

export const FileUploadList = withComponent({
    name: 'FileUploadList',
    defaultProps: defaultListProps,
    setup() {
        const fileupload = useFileUploadContext();

        return { fileupload };
    },
    render(instance) {
        const { props, ptmi, fileupload } = instance;

        const listProps = mergeProps(
            {
                className: fileupload?.cx('fileList')
            },
            fileupload?.ptm('fileList'),
            ptmi('root')
        );

        const createFileListItems = (files: File[], badgeConfig: FileUploadBadgeConfig, onRemove: (index: number) => void) => {
            return files.map((file: File, index: number) => (
                <div key={file.name + file.type + file.size} className={fileupload?.cx('file')} {...fileupload?.ptm('file')}>
                    <img className={fileupload?.cx('fileThumbnail')} role="presentation" src={URL.createObjectURL(file)} alt={file.name} width={50} {...fileupload?.ptm('fileThumbnail')} />
                    <div className={fileupload?.cx('fileInfo')} {...fileupload?.ptm('fileInfo')}>
                        <div className={fileupload?.cx('fileName')} {...fileupload?.ptm('fileName')}>
                            {file.name}
                        </div>
                        <div className={fileupload?.cx('fileSize')} {...fileupload?.ptm('fileSize')}>
                            {fileupload?.formatSize(file.size)}
                        </div>
                    </div>
                    <Badge severity={badgeConfig.severity}>{badgeConfig.label}</Badge>
                    <div className={fileupload?.cx('fileActions')} {...fileupload?.ptm('fileActions')}>
                        <Button variant="text" rounded iconOnly severity="danger" onClick={() => onRemove(index)}>
                            <TimesIcon aria-hidden="true" />
                        </Button>
                    </div>
                </div>
            ));
        };

        const createFileList = (files: File[], badgeConfig: FileUploadBadgeConfig, onRemove: (index: number) => void) => {
            return files.length ? <div {...listProps}>{createFileListItems(files, badgeConfig, onRemove)}</div> : null;
        };

        const fileList = createFileList(fileupload?.state.files || [], { severity: 'warn', label: 'Pending' }, (index: number) => fileupload?.remove(index));

        const uploadedFileList = createFileList(fileupload?.state.uploadedFiles || [], { severity: 'success', label: 'Completed' }, (index: number) => fileupload?.removeUploadedFile(index));

        return (
            <Component instance={instance}>
                {fileList}
                {uploadedFileList}
                {resolve(props.children, instance)}
            </Component>
        );
    }
});
