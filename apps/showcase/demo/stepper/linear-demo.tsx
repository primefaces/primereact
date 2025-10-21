import { StepperPanelInstance } from '@primereact/types/shared/stepper';
import { Button } from 'primereact/button';
import { Stepper } from 'primereact/stepper';

export default function HorizontalDemo() {
    return (
        <div className="card flex justify-center">
            <Stepper defaultValue="1" linear className="basis-[50rem]">
                <Stepper.List>
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
                    <Stepper.Panel asChild value="1">
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col h-48">
                                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                            Content I
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-end">
                                        <Button onClick={() => stepper?.setActiveStep('2')}>
                                            Next
                                            <i className="pi pi-arrow-right " />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value="2">
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col h-48">
                                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                            Content II
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-between">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep('1')}>
                                            <i className="pi pi-arrow-left" />
                                            Back
                                        </Button>
                                        <Button onClick={() => stepper?.setActiveStep('3')}>
                                            Next
                                            <i className="pi pi-arrow-right" />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value="3">
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col h-48">
                                        <div className="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                            Content III
                                        </div>
                                    </div>
                                    <div className="pt-6 ">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep('2')}>
                                            <i className="pi pi-arrow-left " />
                                            Back
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                </Stepper.Panels>
            </Stepper>
        </div>
    );
}
