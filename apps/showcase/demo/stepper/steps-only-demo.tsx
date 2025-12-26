'use client';

import { Stepper } from 'primereact/stepper';

export default function StepsOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Stepper.Root value="1" className="basis-[50rem]">
                <Stepper.List>
                    <Stepper.Step value="1">
                        <Stepper.Header>
                            <Stepper.Number>1</Stepper.Number>
                            <Stepper.Title>Design</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="2">
                        <Stepper.Header>
                            <Stepper.Number>2</Stepper.Number>
                            <Stepper.Title>Development</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                    <Stepper.Step value="3">
                        <Stepper.Header>
                            <Stepper.Number>3</Stepper.Number>
                            <Stepper.Title>QA</Stepper.Title>
                        </Stepper.Header>
                        <Stepper.Separator />
                    </Stepper.Step>
                </Stepper.List>
            </Stepper.Root>
        </div>
    );
}
