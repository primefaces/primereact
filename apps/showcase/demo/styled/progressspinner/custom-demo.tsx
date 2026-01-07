import { ProgressSpinner } from '@primereact/ui/progressspinner';

export default function CustomDemo() {
    return (
        <div className="flex justify-center">
            <ProgressSpinner
                strokeWidth="8"
                fill="transparent"
                animationDuration=".5s"
                style={{ width: '50px', height: '50px' }}
                aria-label="Custom ProgressSpinner"
            />
        </div>
    );
}
