import { ProgressBar } from 'primereact/progressbar';

export default function BasicDemo() {
    const value = 50;

    return (
        <div className="card">
            <ProgressBar value={value}>
                <ProgressBar.Label>{value}%</ProgressBar.Label>
            </ProgressBar>
        </div>
    );
}
