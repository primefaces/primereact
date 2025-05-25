import { cn } from '@primeuix/utils';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import * as React from 'react';

const orderProgress = [
    {
        status: 'Place Order'
    },
    {
        status: 'Order Placed',
        colors: {
            track: '!bg-blue-500/20',
            indicator: '!bg-blue-600 dark:!bg-blue-400'
        }
    },
    {
        status: 'Processing',
        colors: {
            track: '!bg-yellow-500/20',
            indicator: '!bg-amber-600 dark:!bg-amber-400'
        }
    },
    {
        status: 'Shipped',
        colors: {
            track: '!bg-purple-500/20',
            indicator: '!bg-violet-600 dark:!bg-violet-400'
        }
    },
    {
        status: 'Delivered',
        colors: {
            track: '!bg-green-500/20',
            indicator: '!bg-green-600 dark:!bg-green-400'
        }
    }
];

export default function StepsDemo() {
    const [step, setStep] = React.useState(1);
    const nextStep = () => setStep(Math.min(step + 1, orderProgress.length));
    const prevStep = () => setStep(Math.max(step - 1, 0));

    return (
        <div className="card">
            <div className="max-w-sm mx-auto">
                <div className="mb-3 font-medium">{orderProgress[step].status}</div>
                <ProgressBar value={step} min={0} max={4}>
                    {() => {
                        const { colors } = orderProgress[step] ?? {};

                        return (
                            <ProgressBar.Track className={cn(colors?.track, 'transition-all duration-300 ease-linear')}>
                                <ProgressBar.Indicator className={cn(colors?.indicator, '!transition-[width,_background-color] duration-300 ease-linear')}>
                                    <ProgressBar.Label>
                                        <ProgressBar.Value />
                                    </ProgressBar.Label>
                                </ProgressBar.Indicator>
                            </ProgressBar.Track>
                        );
                    }}
                </ProgressBar>

                <div className="flex items-center justify-between mt-6">
                    <Button onClick={prevStep} disabled={step === 0} rounded variant="text" severity="contrast">
                        Previous
                    </Button>
                    <Button onClick={nextStep} disabled={step === orderProgress.length - 1} rounded variant="text" severity="contrast">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
