'use client';

import { ProgressBar } from '@primereact/ui/progressbar';

export default function FormatterDemo() {
    return (
        <div>
            <ProgressBar.Root value={50} formatter={(value: number) => `${value}/100`}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar.Root>
        </div>
    );
}
