import { ProgressBar } from 'primereact/progressbar';
import * as React from 'react';

export default function DynamicDemo() {
    const [value, setValue] = React.useState(0);
    const interval = React.useRef<NodeJS.Timeout | undefined>(undefined);

    React.useEffect(() => {
        interval.current = setInterval(() => {
            setValue((prevValue) => {
                const newValue = prevValue + Math.floor(Math.random() * 10) + 1;

                if (newValue >= 100) {
                    clearInterval(interval.current);
                    return 100;
                }

                return newValue;
            });
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = undefined;
            }
        };
    }, []);
    return (
        <div className="card">
            <ProgressBar value={value}>
                <ProgressBar.Label>{value}%</ProgressBar.Label>
            </ProgressBar>
        </div>
    );
}
