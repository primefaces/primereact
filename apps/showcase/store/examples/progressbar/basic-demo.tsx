import { ProgressBar } from 'primereact/progressbar';

export default function BasicDemo() {
    const value = 50;

    return (
        <div className="card">
            <ProgressBar value={value}>
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
