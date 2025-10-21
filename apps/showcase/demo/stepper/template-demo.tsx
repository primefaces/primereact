import { StepperPanelInstance, StepperStepInstance } from '@primereact/types/shared/stepper';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Stepper } from 'primereact/stepper';
import { ToggleButton } from 'primereact/togglebutton';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-center">
            <Stepper value={1} className="basis-[40rem]">
                <Stepper.List>
                    <Stepper.Step asChild value={1}>
                        {(instance: StepperStepInstance) => {
                            const { stepper, props } = instance;

                            return (
                                <div className="flex flex-row flex-auto gap-2">
                                    <button
                                        className="bg-transparent border-0 inline-flex flex-col gap-2 cursor-pointer"
                                        onClick={() => stepper?.setActiveStep(props.value)}
                                    >
                                        <span
                                            className={`rounded-full border-2 w-12 h-12 inline-flex items-center justify-center ${
                                                (instance?.props?.value as number) <= (stepper?.state.value as number)
                                                    ? 'bg-primary text-primary-contrast border-primary'
                                                    : 'border-surface-200 dark:border-surface-700'
                                            }`}
                                        >
                                            <i className="pi pi-user" />
                                        </span>
                                    </button>
                                    <Divider />
                                </div>
                            );
                        }}
                    </Stepper.Step>
                    <Stepper.Step asChild value={2}>
                        {(instance: StepperStepInstance) => {
                            const { stepper, props } = instance;

                            return (
                                <div className="flex flex-row flex-auto gap-2">
                                    <button
                                        className="bg-transparent border-0 inline-flex flex-col gap-2 cursor-pointer"
                                        onClick={() => stepper?.setActiveStep(props.value)}
                                    >
                                        <span
                                            className={`rounded-full border-2 w-12 h-12 inline-flex items-center justify-center ${
                                                (props?.value as number) <= (stepper?.state.value as number)
                                                    ? 'bg-primary text-primary-contrast border-primary'
                                                    : 'border-surface-200 dark:border-surface-700'
                                            }`}
                                        >
                                            <i className="pi pi-star" />
                                        </span>
                                    </button>
                                    <Divider />
                                </div>
                            );
                        }}
                    </Stepper.Step>
                    <Stepper.Step asChild value={3}>
                        {(instance: StepperStepInstance) => {
                            const { stepper, props } = instance;

                            return (
                                <div className="flex flex-row gap-2">
                                    <button
                                        className="bg-transparent border-0 inline-flex flex-col gap-2 cursor-pointer"
                                        onClick={() => stepper?.setActiveStep(props.value)}
                                    >
                                        <span
                                            className={`rounded-full border-2 w-12 h-12 inline-flex items-center justify-center ${
                                                (props?.value as number) <= (stepper?.state.value as number)
                                                    ? 'bg-primary text-primary-contrast border-primary'
                                                    : 'border-surface-200 dark:border-surface-700'
                                            }`}
                                        >
                                            <i className="pi pi-id-card" />
                                        </span>
                                    </button>
                                </div>
                            );
                        }}
                    </Stepper.Step>
                </Stepper.List>
                <Stepper.Panels>
                    <Stepper.Panel asChild value={1}>
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col gap-2 mx-auto" style={{ minHeight: '16rem', maxWidth: '20rem' }}>
                                        <div className="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                                        <div className="field">
                                            <InputText id="input" type="text" placeholder="Name" fluid />
                                        </div>
                                        <div className="field">
                                            <InputText id="email" type="email" placeholder="Email" fluid />
                                        </div>
                                        <div className="field">
                                            <InputText id="password" placeholder="Password" fluid />
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-end">
                                        <Button onClick={() => stepper?.setActiveStep(2)}>
                                            Next
                                            <i className="pi pi-arrow-right" />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value={2}>
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col gap-2 mx-auto" style={{ minHeight: '16rem', maxWidth: '24rem' }}>
                                        <div className="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Nature</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Art</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Music</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Design</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Photography</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Movies</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Sports</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Gaming</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Traveling</ToggleButton.Indicator>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <ToggleButton.Indicator>Dancing</ToggleButton.Indicator>
                                            </ToggleButton>
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-between">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep(1)}>
                                            <i className="pi pi-arrow-left" />
                                            Back
                                        </Button>
                                        <Button onClick={() => stepper?.setActiveStep(3)}>
                                            Next
                                            <i className="pi pi-arrow-right" />
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Stepper.Panel>
                    <Stepper.Panel asChild value={3}>
                        {(instance: StepperPanelInstance) => {
                            const { stepper } = instance;

                            return (
                                <>
                                    <div className="flex flex-col gap-2 mx-auto" style={{ minHeight: '16rem', maxWidth: '24rem' }}>
                                        <div className="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                                        <div className="flex justify-center">
                                            <Image
                                                alt="logo"
                                                width={240}
                                                height={160}
                                                src="https://primefaces.org/cdn/primevue/images/stepper/content.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex pt-6 justify-start">
                                        <Button severity="secondary" onClick={() => stepper?.setActiveStep(2)}>
                                            <i className="pi pi-arrow-left" />
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
