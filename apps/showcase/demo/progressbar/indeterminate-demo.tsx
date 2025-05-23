import { ProgressBar } from 'primereact/progressbar';

export default function IndeterminateDemo() {
    return (
        <div className="card">
            <ProgressBar mode="indeterminate">
                <ProgressBar.Track className="!h-1.5">
                    <ProgressBar.Indicator />
                </ProgressBar.Track>
            </ProgressBar>
        </div>
    );
}
