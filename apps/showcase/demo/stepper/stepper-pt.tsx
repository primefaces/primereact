'use client';

import { Stepper } from 'primereact/stepper';

export default function StepperPTDemo() {
    return (
        <Stepper.Root value="1" className="basis-[50rem]">
            <Stepper.List style={{ overflowX: 'unset' }}>
                <Stepper.Step value="1">
                    <Stepper.Header>
                        <Stepper.Number>1</Stepper.Number>
                        <Stepper.Title>Header I</Stepper.Title>
                    </Stepper.Header>
                    <Stepper.Separator />
                </Stepper.Step>
                <Stepper.Step value="2">
                    <Stepper.Header>
                        <Stepper.Number>2</Stepper.Number>
                        <Stepper.Title>Header II</Stepper.Title>
                    </Stepper.Header>
                    <Stepper.Separator />
                </Stepper.Step>
                <Stepper.Step value="3">
                    <Stepper.Header>
                        <Stepper.Number>3</Stepper.Number>
                        <Stepper.Title>Header III</Stepper.Title>
                    </Stepper.Header>
                </Stepper.Step>
            </Stepper.List>
            <Stepper.Panels>
                <Stepper.Panel value="1">
                    <div className="flex flex-col h-48">
                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            Content I
                        </div>
                    </div>
                </Stepper.Panel>
                <Stepper.Panel value="2">
                    <div className="flex flex-col h-48">
                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            Content II
                        </div>
                    </div>
                </Stepper.Panel>
                <Stepper.Panel value="3">
                    <div className="flex flex-col h-48">
                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                            Content III
                        </div>
                    </div>
                </Stepper.Panel>
            </Stepper.Panels>
        </Stepper.Root>
    );
}
