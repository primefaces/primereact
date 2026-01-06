'use client';

import { Motion } from '@primereact/core/motion';
import { StepperItemInstance } from '@primereact/types/shared/stepper';
import { Stepper } from 'primereact/stepper';

export default function VerticalDemo() {
    return (
        <div>
            <Stepper.Root value="1">
                <Stepper.Item value="1">
                    {(instance: StepperItemInstance) => {
                        return (
                            <>
                                <Stepper.Step>
                                    <Stepper.Header>
                                        <Stepper.Number>1</Stepper.Number>
                                        <Stepper.Title>Header I</Stepper.Title>
                                    </Stepper.Header>
                                </Stepper.Step>
                                <Motion in={instance.active} name="p-toggleable-content">
                                    <Stepper.Panel>
                                        <Stepper.Separator />
                                        <Stepper.Content>
                                            <div className="flex flex-col h-48">
                                                <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                                    Content I
                                                </div>
                                            </div>
                                        </Stepper.Content>
                                    </Stepper.Panel>
                                </Motion>
                            </>
                        );
                    }}
                </Stepper.Item>
                <Stepper.Item value="2">
                    {(instance: StepperItemInstance) => {
                        return (
                            <>
                                <Stepper.Step>
                                    <Stepper.Header>
                                        <Stepper.Number>2</Stepper.Number>
                                        <Stepper.Title>Header II</Stepper.Title>
                                    </Stepper.Header>
                                </Stepper.Step>
                                <Motion in={instance.active} name="p-toggleable-content">
                                    <Stepper.Panel>
                                        <Stepper.Separator />
                                        <Stepper.Content>
                                            <div className="flex flex-col h-48">
                                                <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                                    Content II
                                                </div>
                                            </div>
                                        </Stepper.Content>
                                    </Stepper.Panel>
                                </Motion>
                            </>
                        );
                    }}
                </Stepper.Item>
                <Stepper.Item value="3">
                    {(instance: StepperItemInstance) => {
                        return (
                            <>
                                <Stepper.Step>
                                    <Stepper.Header>
                                        <Stepper.Number>3</Stepper.Number>
                                        <Stepper.Title>Header III</Stepper.Title>
                                    </Stepper.Header>
                                </Stepper.Step>
                                <Motion in={instance.active} name="p-toggleable-content">
                                    <Stepper.Panel>
                                        <Stepper.Content>
                                            <div className="flex flex-col h-48">
                                                <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                                    Content III
                                                </div>
                                            </div>
                                        </Stepper.Content>
                                    </Stepper.Panel>
                                </Motion>
                            </>
                        );
                    }}
                </Stepper.Item>
            </Stepper.Root>
        </div>
    );
}
