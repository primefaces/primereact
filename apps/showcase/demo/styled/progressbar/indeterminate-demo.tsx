'use client';

import { ProgressBar } from '@primereact/ui/progressbar';

export default function IndeterminateDemo() {
    return (
        <div>
            <ProgressBar.Root mode="indeterminate">
                <ProgressBar.Track className="h-1.5">
                    <ProgressBar.Indicator />
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
