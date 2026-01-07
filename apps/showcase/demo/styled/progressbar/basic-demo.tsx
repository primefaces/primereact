import { ProgressBar } from '@primereact/ui/progressbar';

export default function BasicDemo() {
    const value = 50;

    return (
        <div>
            <ProgressBar.Root value={value}>
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
