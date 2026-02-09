'use client';
import { Button } from '@primereact/ui/button';
import { Timeline } from '@primereact/ui/timeline';
import * as React from 'react';
import { Check } from '@primeicons/react/check';
import { CheckCircle } from '@primeicons/react/check-circle';
import { Refresh } from '@primeicons/react/refresh';

export default function InteractiveDemo() {
    const allSteps = [
        { id: 1, label: 'Account Created', icon: 'pi pi-user-plus' },
        { id: 2, label: 'Email Verified', icon: 'pi pi-envelope' },
        { id: 3, label: 'Profile Completed', icon: 'pi pi-id-card' },
        { id: 4, label: 'First Purchase', icon: 'pi pi-shopping-bag' },
        { id: 5, label: 'Review Posted', icon: 'pi pi-star' }
    ];

    const [completedSteps, setCompletedSteps] = React.useState<number[]>([1]);
    const [currentStep, setCurrentStep] = React.useState(2);

    const handleComplete = (stepId: number) => {
        if (stepId === currentStep) {
            setCompletedSteps([...completedSteps, stepId]);

            if (currentStep < allSteps.length) {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handleReset = () => {
        setCompletedSteps([1]);
        setCurrentStep(2);
    };

    const getStepStatus = (stepId: number) => {
        if (completedSteps.includes(stepId)) return 'completed';

        if (stepId === currentStep) return 'current';

        return 'pending';
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-0">Onboarding Progress</h3>
                    <p className="text-sm text-surface-500 dark:text-surface-400">
                        {completedSteps.length} of {allSteps.length} steps completed
                    </p>
                </div>
                <Button variant="outlined" size="small" onClick={handleReset} disabled={completedSteps.length === 1}>
                    <Refresh className="mr-2" />
                    Reset
                </Button>
            </div>

            <div className="w-full bg-surface-200 dark:bg-surface-700 rounded-full h-2">
                <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(completedSteps.length / allSteps.length) * 100}%` }}
                />
            </div>

            <Timeline.Root className="mt-4">
                {allSteps.map((step, index) => {
                    const status = getStepStatus(step.id);

                    return (
                        <Timeline.Event key={step.id}>
                            <Timeline.Opposite />
                            <Timeline.Separator>
                                <button
                                    onClick={() => handleComplete(step.id)}
                                    disabled={status !== 'current'}
                                    className={`
                                            flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                                            ${status === 'completed' ? 'bg-green-500 text-white cursor-default' : ''}
                                            ${status === 'current' ? 'bg-primary text-primary-contrast cursor-pointer hover:scale-110 animate-pulse' : ''}
                                            ${status === 'pending' ? 'bg-surface-200 dark:bg-surface-700 text-surface-400 cursor-not-allowed' : ''}
                                        `}
                                >
                                    {status === 'completed' ? <Check /> : <i className={step.icon} />}
                                </button>

                                {index !== allSteps.length - 1 && (
                                    <Timeline.Connector
                                        className={`transition-colors duration-300 ${completedSteps.includes(step.id) ? 'bg-green-500' : 'bg-surface-300 dark:bg-surface-600'}`}
                                    />
                                )}
                            </Timeline.Separator>
                            <Timeline.Content>
                                <div
                                    className={`
                                    p-3 rounded-lg transition-all duration-300
                                    ${status === 'completed' ? 'bg-green-50 dark:bg-green-900/20' : ''}
                                    ${status === 'current' ? 'bg-primary/10' : ''}
                                    ${status === 'pending' ? 'opacity-50' : ''}
                                `}
                                >
                                    <div
                                        className={`font-medium ${status === 'completed' ? 'text-green-700 dark:text-green-400 line-through' : status === 'current' ? 'text-primary' : 'text-surface-500'}`}
                                    >
                                        {step.label}
                                    </div>
                                    {status === 'current' && <div className="text-xs text-primary/70 mt-1">Click the marker to complete</div>}
                                </div>
                            </Timeline.Content>
                        </Timeline.Event>
                    );
                })}
            </Timeline.Root>

            {completedSteps.length === allSteps.length && (
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
                    <CheckCircle className="text-2xl text-green-500 mb-2" />
                    <div className="font-semibold text-green-700 dark:text-green-400">Onboarding Complete!</div>
                    <p className="text-sm text-green-600 dark:text-green-500">You&apos;ve completed all the steps.</p>
                </div>
            )}
        </div>
    );
}
