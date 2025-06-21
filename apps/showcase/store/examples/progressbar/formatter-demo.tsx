import { ProgressBar } from 'primereact/progressbar';

export default function FormatterDemo() {
    return (
        <div className="card">
            <ProgressBar value={50} formatter={(value: number) => `${value}/100`}>
                <ProgressBar.Track>
                    <ProgressBar.Indicator>
                        <ProgressBar.Label>
                            <ProgressBar.Value />
                        </ProgressBar.Label>
                    </ProgressBar.Indicator>
                </ProgressBar.Track>
            </ProgressBar>
        </div>
    );
}
