import { ProgressBar } from 'primereact/progressbar';
import * as React from 'react';

export default function TemplateDemo() {
    const [uploadedFileSize, setUploadedFileSize] = React.useState(0);
    const maxFileSize = 5000;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setUploadedFileSize((prevValue) => {
                const newValue = prevValue + Math.floor(Math.random() * 200) + 1;

                return newValue >= maxFileSize ? maxFileSize : newValue;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes.toFixed(2) + ' B';
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
        else return (bytes / 1048576).toFixed(2) + ' MB';
    };

    return (
        <div className="card">
            <div className="max-w-sm mx-auto space-y-8">
                {/* Basic percentage formatter */}
                <ProgressBar value={uploadedFileSize} max={maxFileSize} formatter={(value: number) => `${value.toFixed(1)}%`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">Basic Percentage</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="!rounded-full !h-1.5">
                        <ProgressBar.Indicator className="!bg-blue-600 !rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar>

                {/* File size formatter */}
                <ProgressBar
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        const currentSize = (value / 100) * maxFileSize;

                        return `${formatFileSize(currentSize)} / ${formatFileSize(maxFileSize)}`;
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">File Size Progress</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="!rounded-full !h-1.5">
                        <ProgressBar.Indicator className="!bg-emerald-600 !rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar>

                {/* Time remaining formatter */}
                <ProgressBar
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        const remaining = ((maxFileSize - uploadedFileSize) / 200).toFixed(0);

                        return `${value.toFixed(0)}% (${remaining}s remaining)`;
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">Time Remaining</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="!rounded-full !h-1.5">
                        <ProgressBar.Indicator className="!bg-purple-600 !rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar>

                {/* Status Steps formatter */}
                <ProgressBar
                    value={uploadedFileSize}
                    max={maxFileSize}
                    formatter={(value: number) => {
                        if (value < 40) return 'Preparing file...';
                        else if (value < 60) return 'Uploading file...';
                        else if (value < 99) return 'Finalizing...';
                        else return 'Upload complete';
                    }}
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">Upload Status Steps</span>
                        <ProgressBar.Value />
                    </div>
                    <ProgressBar.Track className="!rounded-full !h-1.5">
                        <ProgressBar.Indicator className="!bg-orange-600 !rounded-full" />
                    </ProgressBar.Track>
                </ProgressBar>
            </div>
        </div>
    );
}
