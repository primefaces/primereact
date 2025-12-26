'use client';

import { ProgressBar } from 'primereact/progressbar';

export default function ProgressBarPT() {
    const value = 50;

    return (
        <div className="w-full">
            <ProgressBar.Root value={value}>
                <ProgressBar.Label>{value}%</ProgressBar.Label>
            </ProgressBar.Root>
        </div>
    );
}
