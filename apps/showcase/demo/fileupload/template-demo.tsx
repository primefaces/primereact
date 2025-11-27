'use client';

import { FileUploadInstance, FileUploadSelectEvent } from '@primereact/types/shared/fileupload';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Message } from 'primereact/message';
import { ProgressBar } from 'primereact/progressbar';
import * as React from 'react';

export default function TemplateDemo() {
    const fileUploadRef = React.useRef<FileUploadInstance>(null);
    const [totalSize, setTotalSize] = React.useState(0);
    const [totalSizePercent, setTotalSizePercent] = React.useState(0);

    const onRemoveFileCallback = (cb: ((index: number) => void) | undefined, file: File, index: number) => {
        if (!fileUploadRef.current || !cb) return;

        const fileSizeStr = fileUploadRef.current.formatSize(file.size);
        const _totalSize = totalSize - parseInt(fileSizeStr);

        cb(index);
        setTotalSize(_totalSize);
        setTotalSizePercent(_totalSize / 10000);
    };

    const onSelect = (e: FileUploadSelectEvent) => {
        if (!fileUploadRef.current) return;

        let _totalSize = totalSize;
        const files = e.files;

        files.forEach((file) => {
            const fileSizeStr = fileUploadRef.current!.formatSize(file.size);

            _totalSize += parseInt(fileSizeStr);
        });

        setTotalSize(_totalSize);
        setTotalSizePercent(_totalSize / 10);
    };

    return (
        <div>
            <FileUpload
                ref={fileUploadRef}
                name="demo[]"
                url="/api/upload"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                className="border border-surface-200 dark:border-surface-700 rounded-md"
                onSelect={onSelect}
            >
                {(instance: FileUploadInstance) => {
                    return (
                        <>
                            <div className="flex items-center p-5 gap-2">
                                <div className="flex flex-wrap justify-between items-center flex-1 gap-4">
                                    <div className="flex gap-2">
                                        <Button onClick={instance.choose} iconOnly rounded variant="outlined" severity="secondary">
                                            <i className="pi pi-images" />
                                        </Button>
                                        <Button
                                            onClick={instance.upload}
                                            iconOnly
                                            rounded
                                            variant="outlined"
                                            severity="success"
                                            disabled={!instance.hasFiles}
                                        >
                                            <i className="pi pi-cloud-upload" />
                                        </Button>
                                        <Button
                                            onClick={instance.clear}
                                            iconOnly
                                            rounded
                                            variant="outlined"
                                            severity="danger"
                                            disabled={!instance.hasFiles}
                                        >
                                            <i className="pi pi-times" />
                                        </Button>
                                    </div>
                                    <ProgressBar value={totalSizePercent}>
                                        <ProgressBar.Track className="md:w-20rem w-full md:ml-auto">
                                            <ProgressBar.Indicator>
                                                <ProgressBar.Label />
                                            </ProgressBar.Indicator>
                                        </ProgressBar.Track>
                                    </ProgressBar>
                                </div>
                            </div>
                            <FileUpload.Content>
                                <div className="flex flex-col gap-8 pt-4">
                                    {instance.state.messages &&
                                        instance.state.messages.length > 0 &&
                                        instance.state.messages.map((msg, i) => (
                                            <Message key={i} severity="error" className="mb-2">
                                                <Message.Content>
                                                    <Message.Text>{msg}</Message.Text>
                                                </Message.Content>
                                            </Message>
                                        ))}

                                    {instance.hasFiles && (
                                        <>
                                            <h5 className="font-semibold">Pending</h5>
                                            <div className="flex flex-wrap gap-4">
                                                {instance.state.files.map((file, index) => (
                                                    <div
                                                        key={file.name + file.type + file.size}
                                                        className="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                                                    >
                                                        <div>
                                                            <img
                                                                role="presentation"
                                                                alt={file.name}
                                                                src={URL.createObjectURL(file)}
                                                                width="100"
                                                                height="50"
                                                            />
                                                        </div>
                                                        <span className="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">
                                                            {file.name}
                                                        </span>
                                                        <div>{instance?.formatSize(file.size)}</div>
                                                        <Badge severity="warn">Pending</Badge>
                                                        <Button
                                                            variant="text"
                                                            rounded
                                                            iconOnly
                                                            severity="danger"
                                                            onClick={() => onRemoveFileCallback(instance?.remove, file, index)}
                                                        >
                                                            <i className="pi pi-times" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {instance.hasUploadedFiles && (
                                        <>
                                            <h5 className="font-semibold">Completed</h5>
                                            <div className="flex flex-wrap gap-4">
                                                {instance.state.uploadedFiles.map((file, index) => (
                                                    <div
                                                        key={file.name + file.type + file.size}
                                                        className="p-8 rounded-border flex flex-col border border-surface items-center gap-4"
                                                    >
                                                        <div>
                                                            <img
                                                                role="presentation"
                                                                alt={file.name}
                                                                src={URL.createObjectURL(file)}
                                                                width="100"
                                                                height="50"
                                                            />
                                                        </div>
                                                        <span className="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">
                                                            {file.name}
                                                        </span>
                                                        <div>{instance.formatSize(file.size)}</div>
                                                        <Badge severity="success" className="mt-4">
                                                            Completed
                                                        </Badge>
                                                        <Button
                                                            variant="text"
                                                            rounded
                                                            iconOnly
                                                            severity="danger"
                                                            onClick={() => instance?.removeUploadedFile(index)}
                                                        >
                                                            <i className="pi pi-times" />
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {!instance.hasFiles && !instance.hasUploadedFiles && (
                                        <>
                                            <div className="flex items-center justify-center flex-col">
                                                <i className="pi pi-cloud-upload border-2 rounded-full p-8 text-4xl text-muted-color" />
                                                <p className="mt-6 mb-0">Drag and drop files to here to upload.</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </FileUpload.Content>
                        </>
                    );
                }}
            </FileUpload>
        </div>
    );
}
