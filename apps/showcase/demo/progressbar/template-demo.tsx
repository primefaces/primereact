import { ProgressBar } from 'primereact/progressbar';

export default function TemplateDemo() {
    const value = 50;

    return (
        <div className="card">
            <ProgressBar value={value}>
                <ProgressBar.Label>
                    {value}/<b>100</b>
                </ProgressBar.Label>
            </ProgressBar>
        </div>
    );
}
